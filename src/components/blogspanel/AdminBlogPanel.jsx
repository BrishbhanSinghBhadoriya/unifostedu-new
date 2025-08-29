"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
// Chart components (Recharts)
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

// Icons (Lucide)
import {
  LayoutDashboard,
  FileText,
  PlusSquare,
  Pause,
  Play,
  Edit,
  Trash2,
  Eye,
  Bold,
  Italic,
  List,
  ListOrdered,
  Image as ImageIcon,
  Paperclip,
  FileText as FileTextIcon,
  X,
  Save,
  Send,
  ChevronDown,
  Tag,
  MessageSquare,
  Globe,
  Lock,
  Calendar,
  User,
  Settings,
  Download,
  Upload,
  Plus,
  Check,
  ChevronRight,
  Link as LinkIcon,
  Underline as UnderlineIcon,
  Strikethrough,
  Undo2,
  Redo2,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Highlighter,
  Palette
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { toast } from "sonner";
import { uploadAPI, blogAPI } from "@/lib/axios";
import DashboardPanel from "./DashboardPanel";
import BlogsPanel from "./BlogsPanel";
import { Card, PrimaryButton, SecondaryButton, Badge, cx } from "./panelUI";
import RichTextEditor from "./RichTextEditor";
import FileUpload from "./FileUpload";

// Mock data for the chart
const data = [
  { name: "Jan", blogs: 4 },
  { name: "Feb", blogs: 7 },
  { name: "Mar", blogs: 3 },
  { name: "Apr", blogs: 8 },
  { name: "May", blogs: 6 },
  { name: "Jun", blogs: 10 },
];


const ToggleButton = ({ active, icon, ...rest }) => (
  <button
    {...rest}
    className={cx(
      "p-2 rounded-lg transition-colors",
      active ? "bg-blue-100 text-blue-600" : "text-gray-500 hover:bg-gray-100"
    )}
  >
    {icon}
  </button>
);

// --------- Blog Creation Components ----------







function BlogCreationTab() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("published");
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [newTag, setNewTag] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [allowComments, setAllowComments] = useState(true);
  const [featuredImage, setFeaturedImage] = useState(null);
  const [featuredImageUrl, setFeaturedImageUrl] = useState("");
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [contentImages, setContentImages] = useState([]);
  const [categoryQuery, setCategoryQuery] = useState("");
  const [tagQuery, setTagQuery] = useState("");
  const [editorTab, setEditorTab] = useState("write");

  const categoryOptions = useMemo(
    () => [
      "Admissions",
      "Scholarships",
      "Distance Learning",
      "Online Programs",
      "MBA",
      "BBA",
      "Engineering",
      "University News",
      "Career Guidance",
      "Exams"
    ],
    []
  );
  const filteredCategoryOptions = useMemo(
    () => categoryOptions.filter(
      (c) => c.toLowerCase().includes(categoryQuery.toLowerCase()) && !categories.includes(c)
    ),
    [categoryOptions, categoryQuery, categories]
  );

  const addCategory = () => {
    const value = (newCategory || categoryQuery).trim();
    if (value && !categories.includes(value)) {
      setCategories([...categories, value]);
      setNewCategory("");
      setCategoryQuery("");
    }
  };

  const removeCategory = (categoryToRemove) => {
    setCategories(categories.filter(category => category !== categoryToRemove));
  };

  const addTag = () => {
    const value = (newTag || tagQuery).trim();
    if (value && !tags.includes(value)) {
      setTags([...tags, value]);
      setNewTag("");
      setTagQuery("");
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleFeaturedImageChange = async (files) => {
    if (files.length === 0) return;
    const file = files[0];
    setFeaturedImage(file);
    // Optimistic local preview while upload happens
    try {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setFeaturedImageUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    } catch {}

    // Upload to backend to obtain CDN URL
    try {
      setIsUploadingImage(true);
      const formData = new FormData();
      formData.append('image', file);
      const res = await uploadAPI.image(formData);
      const remoteUrl = res?.data?.url || res?.data?.data?.url || '';
      if (remoteUrl) setFeaturedImageUrl(remoteUrl);
    } catch (err) {
      console.error('Image upload failed', err);
    } finally {
      setIsUploadingImage(false);
    }
  };

  // Load draft from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem('createBlogDraft');
      if (raw) {
        const draft = JSON.parse(raw);
        if (draft.title) setTitle(draft.title);
        if (draft.content) setContent(draft.content);
        if (draft.status) setStatus(draft.status);
        if (Array.isArray(draft.categories)) setCategories(draft.categories);
        if (Array.isArray(draft.tags)) setTags(draft.tags);
        if (draft.featuredImageUrl) setFeaturedImageUrl(draft.featuredImageUrl);
      }
    } catch {}
  }, []);

  // Persist draft to localStorage
  useEffect(() => {
    const id = setTimeout(() => {
      try {
        const draft = {
          title,
          content,
          status,
          categories,
          tags,
          featuredImageUrl,
          contentImages,
        };
        localStorage.setItem('createBlogDraft', JSON.stringify(draft));
      } catch {}
    }, 300);
    return () => clearTimeout(id);
  }, [title, content, status, categories, tags, featuredImageUrl, contentImages]);

  const resetForm = () => {
    setTitle("");
    setContent("");
    setStatus("published");
    setCategories([]);
    setTags([]);
    setNewCategory("");
    setNewTag("");
    setCategoryQuery("");
    setTagQuery("");
    setFeaturedImage(null);
    setFeaturedImageUrl("");
    setContentImages([]);
    setEditorTab("write");
    try { localStorage.removeItem('createBlogDraft'); } catch {}
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 sm:mb-6">
        <span>Dashboard</span>
        <ChevronRight size={14} />
        <span className="text-gray-700 font-medium">Blog</span>
        <ChevronRight size={14} />
        <span className="text-gray-700 font-medium">Create Blog</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 sm:mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">Create Blog Post</h1>
          <p className="text-sm text-gray-500 mt-1">Write, preview and publish your blog content.</p>
        </div>
        <div className="flex gap-2 sm:gap-3">
          <SecondaryButton 
            icon={<Eye size={16} />}
            onClick={() => {
              if (content) {
                toast.info('Preview opened in console');
                console.log('Content Preview:', content.replace(/<[^>]*>/g, ''));
              } else {
                toast.error('Please write some content first!');
              }
            }}
          >
            Preview
          </SecondaryButton>
          <PrimaryButton 
            icon={<Send size={16} />}
            onClick={async () => {
              if (!title || !content) {
                toast.error('Please fill in both title and content!');
                return;
              }
              try {
                let imageUrl = featuredImageUrl;
                if (!imageUrl && featuredImage) {
                  const formData = new FormData();
                  formData.append('image', featuredImage);
                  const res = await uploadAPI.image(formData);
                  imageUrl = res?.data?.url || res?.data?.data?.url || '';
                }
                const payload = {
                  title,
                  content,
                  thumbnail: imageUrl || featuredImageUrl || undefined,
                  contentImages,
                  author: 'Admin',
                  category: categories[0] || 'News',
                  tags,
                  isPublished: status === 'published',
                };
                await blogAPI.create(payload);
                toast.success('Blog published successfully!');
                resetForm();
              } catch (e) {
                console.error(e);
                toast.error('Failed to publish blog.');
              }
            }}
          >
            Publish
          </PrimaryButton>
        </div>
      </div>
      <Tabs value={editorTab} onValueChange={setEditorTab} className="w-full">
        <TabsList className="mb-4 bg-white border border-gray-200 rounded-xl p-1 shadow-sm w-full sm:w-fit">
          <TabsTrigger value="write">Write</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="write" forceMount>
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 sm:gap-6">
            <div className="xl:col-span-3 space-y-4 sm:space-y-6">
          <Card className="p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter blog title"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-400"
            />
          </Card>

          <Card className="p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
                  Featured Image (Thumbnail)
            </label>
            <FileUpload
              title="Upload Featured Image"
              acceptedFiles="JPG, PNG, GIF, WEBP"
              onFilesChange={handleFeaturedImageChange}
            />
                {(featuredImage || featuredImageUrl) && (
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-16 h-16 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                      <img
                        alt="thumbnail preview"
                        className="w-full h-full object-cover"
                        src={featuredImageUrl || (typeof featuredImage === 'string' ? featuredImage : (featuredImage ? URL.createObjectURL(featuredImage) : ''))}
                      />
                    </div>
                    {isUploadingImage ? (
                      <div className="text-sm text-gray-600">Uploading image...</div>
                    ) : (
                      <div className="flex items-center gap-2 text-sm text-green-600">
                <Check size={16} />
                        <span>Thumbnail ready</span>
                      </div>
                    )}
              </div>
            )}
          </Card>

          <Card className="p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content *
            </label>
                <RichTextEditor
                  content={content}
                  onContentChange={setContent}
                  onImageAdded={(url) => setContentImages((prev) => (prev.includes(url) ? prev : [...prev, url]))}
                />
              </Card>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <Card className="p-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Status *</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 capitalize"
                >
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                </select>
              </Card>

              <Card className="p-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Categories</label>
                <div className="flex gap-2 mb-2 w-full">
                  <input
                    type="text"
                    value={categoryQuery}
                    onChange={(e) => setCategoryQuery(e.target.value)}
                    placeholder="Type categories..."
                    className="flex-1 px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <SecondaryButton onClick={addCategory}>
                    Add
                  </SecondaryButton>
                </div>
                {filteredCategoryOptions.length > 0 && categoryQuery && (
                  <div className="border border-gray-200 rounded-lg mb-3 max-h-40 overflow-auto bg-white z-10 relative shadow-sm">
                    {filteredCategoryOptions.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => {
                          setCategories([...categories, opt]);
                          setCategoryQuery("");
                        }}
                        className="block w-full text-left px-3 py-2 hover:bg-gray-50"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
                {categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {categories.map((cat) => (
                      <span key={cat} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm max-w-[160px]">
                        <span className="truncate" title={cat}>{cat}</span>
                        <button onClick={() => removeCategory(cat)} className="text-blue-500 hover:text-blue-700">
                          <X size={14} />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
          </Card>

              <Card className="p-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Add Tags</label>
                <div className="flex gap-2 mb-2 w-full">
                  <input
                    type="text"
                    value={tagQuery}
                    onChange={(e) => setTagQuery(e.target.value)}
                    placeholder="Type and press Add"
                    className="flex-1 px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <SecondaryButton onClick={addTag}>Add</SecondaryButton>
                </div>
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm max-w-[160px]">
                        <span className="truncate" title={tag}>#{tag}</span>
                        <button onClick={() => removeTag(tag)} className="text-gray-500 hover:text-gray-700">
                          <X size={14} />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="preview" forceMount>
          <div className="w-full">
            {/* Hero / Featured Image */}
            <div className="w-full h-52 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-t-xl overflow-hidden border border-gray-200 border-b-0">
              {(featuredImage || featuredImageUrl) ? (
                <img
                  alt="Featured Image Preview"
                  className="w-full h-full object-cover"
                  src={featuredImageUrl || (typeof featuredImage === 'string' ? featuredImage : (featuredImage ? URL.createObjectURL(featuredImage) : ''))}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-b from-gray-200 to-gray-300 flex items-center justify-center text-gray-600">
                  <div className="flex items-center gap-2 text-base font-medium">
                    <ImageIcon size={20} />
                    <span>Featured Image Preview</span>
                  </div>
                </div>
              )}
            </div>

            <Card className="p-6 rounded-t-none">
              <div className="max-w-[900px] mx-auto">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
                  {title || "Untitled"}
                </h1>

                {/* Meta Row */}
                <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm mb-6">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>Author Name</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{new Date().toLocaleString(undefined, { dateStyle: 'long', timeStyle: 'short' })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={16} className={status === 'published' ? 'text-green-600' : 'text-yellow-600'} />
                    <span className="capitalize">{status === 'published' ? 'Published' : 'Draft'}</span>
                  </div>
        </div>

                {/* Tags */}
                {tags.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Tag size={16} className="text-gray-500" />
                    {tags.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {/* Categories */}
                {categories.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    <span className="text-gray-700 font-medium mr-1">Categories:</span>
                    {categories.map((c) => (
                      <span key={c} className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm">
                        {c}
                      </span>
                    ))}
                  </div>
                )}

                {/* Content */}
                <div className="prose max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: content || '<p>Start writing content...</p>' }} />
                </div>
              </div>
            </Card>
      </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

const AdminBlogPanel = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarMode, setSidebarMode] = useState("expanded"); // only expanded/collapsed

  const toggleSidebarMode = () => {
    setSidebarMode((prev) => (prev === "expanded" ? "collapsed" : "expanded"));
  };

  const showLabels = sidebarMode === "expanded";

  // Mock blogs
  const blogs = [
    {
      id: 1,
      title: "The Future of Education",
      author: "Admin",
      date: "2025-08-20",
      status: "Published",
    },
    {
      id: 2,
      title: "AI in Universities",
      author: "Bhumika",
      date: "2025-08-22",
      status: "Draft",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-gray-900 text-white transition-all duration-300 ${
          sidebarMode === "expanded" ? "w-64" : "w-20"
        } relative`}
      >
        {/* Toggle Button */}
        <button
          onClick={toggleSidebarMode}
          className="absolute -right-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full border-2 border-gray-900 shadow-lg hover:bg-gray-700"
        >
          {sidebarMode === "expanded" ? <Pause size={16} /> : <Play size={16} />}
        </button>

        <div className="p-5">
          {/* Logo */}
          <div className="flex items-center justify-between space-x-2 mb-10">
            <span className="text-xl font-bold text-blue-400">UniFost</span>
            <div className="relative group">
              <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-lg text-sm">
                <User size={16} />
                <span className="hidden md:inline">Admin</span>
              </button>
              <div className="absolute right-0 mt-2 w-40 bg-white text-gray-700 border border-gray-200 rounded-lg shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition">
                <button
                  className="w-full text-left px-3 py-2 hover:bg-gray-50"
                  onClick={() => {
                    // clear cookie and redirect
                    document.cookie = "admin_token=; Max-Age=0; path=/";
                    window.location.href = "/admin";
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Nav Items */}
          <nav className="flex flex-col space-y-2">
            {[
              { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
              { id: "blogs", label: "Blogs", icon: FileText },
              { id: "create", label: "Create Blog", icon: PlusSquare },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center w-full p-2 rounded-lg transition-colors group relative ${
                  activeTab === item.id
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {showLabels && <span className="ml-3">{item.label}</span>}
                {!showLabels && (
                  <span className="absolute left-full ml-3 px-2 py-1 bg-gray-800 text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                    {item.label}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {activeTab === "dashboard" && <DashboardPanel />}
        {activeTab === "blogs" && <BlogsPanel  />}
        {activeTab === "create" && <BlogCreationTab />}
      </main>
    </div>
  );
};

export default AdminBlogPanel;