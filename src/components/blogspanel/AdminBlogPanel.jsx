"use client";

import React, { useState, useRef } from "react";
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
  Underline,
  List,
  ListOrdered,
  Link,
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
  ChevronRight
} from "lucide-react";

// Mock data for the chart
const data = [
  { name: "Jan", blogs: 4 },
  { name: "Feb", blogs: 7 },
  { name: "Mar", blogs: 3 },
  { name: "Apr", blogs: 8 },
  { name: "May", blogs: 6 },
  { name: "Jun", blogs: 10 },
];


// --------- UI Components ----------
const cx = (...c) => c.filter(Boolean).join(" ");

const Card = ({ className, children, hover = false }) => (
  <div className={cx(
    "bg-white rounded-xl shadow-sm border border-gray-100 transition-all",
    hover && "hover:shadow-md hover:border-gray-200",
    className
  )}>
    {children}
  </div>
);

const PrimaryButton = ({ children, className, icon, ...rest }) => (
  <button
    {...rest}
    className={cx(
      "inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2.5 text-white font-medium hover:from-blue-700 hover:to-blue-800 active:from-blue-800 active:to-blue-900 transition-all shadow-sm hover:shadow-md",
      className
    )}
  >
    {icon && React.cloneElement(icon, { size: 18 })}
    {children}
  </button>
);

const SecondaryButton = ({ children, className, icon, ...rest }) => (
  <button
    {...rest}
    className={cx(
      "inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-gray-700 font-medium hover:bg-gray-50 active:bg-gray-100 transition-all",
      className
    )}
  >
    {icon && React.cloneElement(icon, { size: 18 })}
    {children}
  </button>
);

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

const Badge = ({ children, variant = "default", className }) => {
  const variants = {
    default: "bg-gray-100 text-gray-800",
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    red: "bg-red-100 text-red-800"
  };
  
  return (
    <span className={cx(
      "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
};

// --------- Blog Creation Components ----------
function RichTextEditor() {
  const [content, setContent] = useState("Write your blog content...");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const editorRef = useRef(null);

  const handleFormat = (format) => {
    document.execCommand(format, false);
    editorRef.current.focus();
    
    // Update state for visual feedback
    if (format === 'bold') setIsBold(!isBold);
    if (format === 'italic') setIsItalic(!isItalic);
    if (format === 'underline') setIsUnderline(!isUnderline);
  };

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <div className="flex items-center gap-1 p-3 border-b border-gray-200 bg-gray-50">
        <ToggleButton 
          active={isBold} 
          icon={<Bold size={18} />} 
          onClick={() => handleFormat('bold')} 
        />
        <ToggleButton 
          active={isItalic} 
          icon={<Italic size={18} />} 
          onClick={() => handleFormat('italic')} 
        />
        <ToggleButton 
          active={isUnderline} 
          icon={<Underline size={18} />} 
          onClick={() => handleFormat('underline')} 
        />
        <div className="w-px h-6 bg-gray-200 mx-1"></div>
        <ToggleButton icon={<List size={18} />} />
        <ToggleButton icon={<ListOrdered size={18} />} />
        <ToggleButton icon={<Link size={18} />} />
        <ToggleButton icon={<ImageIcon size={18} />} />
        <ToggleButton icon={<Paperclip size={18} />} />
        <div className="flex-grow"></div>
        <Badge>✅</Badge>
        <Badge variant="blue">💶</Badge>
        <Badge variant="green">Normal Text</Badge>
        <Badge variant="red">GIF</Badge>
        <Badge variant="blue">DJ</Badge>
        <Badge>Y</Badge>
      </div>
      <div
        ref={editorRef}
        contentEditable
        className="p-4 min-h-[300px] focus:outline-none"
        onInput={(e) => setContent(e.target.innerHTML)}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

function FileUpload({ title, acceptedFiles, onFilesChange }) {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles([...files, ...newFiles]);
    onFilesChange && onFilesChange([...files, ...newFiles]);
  };

  const removeFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
    onFilesChange && onFilesChange(newFiles);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const newFiles = Array.from(e.dataTransfer.files);
    setFiles([...files, ...newFiles]);
    onFilesChange && onFilesChange([...files, ...newFiles]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div 
      className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center cursor-pointer transition-colors hover:border-blue-400 hover:bg-blue-50"
      onClick={() => fileInputRef.current?.click()}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        multiple
        accept={acceptedFiles}
        onChange={handleFileChange}
      />
      <Upload size={24} className="mx-auto text-gray-400 mb-2" />
      <p className="font-medium text-gray-700">{title}</p>
      <p className="text-sm text-gray-500 mt-1">Click to upload or drag and drop</p>
      <p className="text-xs text-gray-400 mt-2">{acceptedFiles}</p>
      
      {files.length > 0 && (
        <div className="mt-4 text-left">
          <p className="text-sm font-medium text-gray-700 mb-2">Selected files:</p>
          <div className="space-y-2">
            {files.map((file, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <FileTextIcon size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-700 truncate max-w-xs">{file.name}</span>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(index);
                  }}
                  className="text-gray-400 hover:text-red-500"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function BlogCreationTab() {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("published");
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [newTag, setNewTag] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [allowComments, setAllowComments] = useState(true);
  const [featuredImage, setFeaturedImage] = useState(null);

  const addCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory.trim())) {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory("");
    }
  };

  const removeCategory = (categoryToRemove) => {
    setCategories(categories.filter(category => category !== categoryToRemove));
  };

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleFeaturedImageChange = (files) => {
    if (files.length > 0) {
      setFeaturedImage(files[0]);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <span>Dashboard</span>
        <ChevronRight size={14} />
        <span className="text-gray-700 font-medium">Blog</span>
        <ChevronRight size={14} />
        <span className="text-gray-700 font-medium">Create Blog</span>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Create Blog Post</h1>
        <div className="flex gap-3">
          <SecondaryButton icon={<Eye size={16} />}>
            Preview
          </SecondaryButton>
          <PrimaryButton icon={<Send size={16} />}>
            Publish
          </PrimaryButton>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter blog title"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </Card>

          <Card className="p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Featured Image
            </label>
            <FileUpload
              title="Upload Featured Image"
              acceptedFiles="JPG, PNG, GIF, WEBP"
              onFilesChange={handleFeaturedImageChange}
            />
            {featuredImage && (
              <div className="mt-4 flex items-center gap-2 text-sm text-green-600">
                <Check size={16} />
                <span>Featured image selected</span>
              </div>
            )}
          </Card>

          <Card className="p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content *
            </label>
            <RichTextEditor />
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Embedded Content</h3>
            <FileUpload
              title="Upload Embedded Content"
              acceptedFiles="PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX, JPG, PNG, GIF"
            />
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Publish</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status *
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                  <option value="pending">Pending Review</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Categories
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addCategory()}
                    placeholder="Type categories..."
                    className="flex-grow px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    onClick={addCategory}
                    className="p-2 bg-blue-100 text-blue-600 rounded-xl hover:bg-blue-200"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category, index) => (
                    <Badge key={index} className="flex items-center gap-1">
                      {category}
                      <button onClick={() => removeCategory(category)}>
                        <X size={12} />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTag()}
                    placeholder="Add tags..."
                    className="flex-grow px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    onClick={addTag}
                    className="p-2 bg-blue-100 text-blue-600 rounded-xl hover:bg-blue-200"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <Badge key={index} variant="blue" className="flex items-center gap-1">
                      {tag}
                      <button onClick={() => removeTag(tag)}>
                        <X size={12} />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Globe size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-700">Public</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isPublic}
                    onChange={() => setIsPublic(!isPublic)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageSquare size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-700">Allow Comments</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={allowComments}
                    onChange={() => setAllowComments(!allowComments)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Resource</h3>
            <div className="space-y-2">
              {[
                "Career Paths",
                "Complaints & Feedback",
                "Advertisements",
                "Admin",
                "Configurations",
                "Lead Manager",
                "Events",
                "Reminders",
                "Media",
                "Blog"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 py-1 text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                  <ChevronDown size={14} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center text-white">
                M
              </div>
              <div>
                <div className="font-medium text-gray-900">mithilastack</div>
                <div className="text-sm text-gray-500">mithilastack@gmail.com</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
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
          <div className="flex items-center space-x-2 mb-10">
            <span className="text-xl font-bold text-blue-400">UniFost</span>
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
        {activeTab === "dashboard" && (
          <div>
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-6 rounded-2xl shadow">
                <h2 className="text-lg font-semibold">Total Blogs</h2>
                <p className="text-3xl font-bold mt-2">24</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow">
                <h2 className="text-lg font-semibold">Drafts</h2>
                <p className="text-3xl font-bold mt-2">6</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow">
                <h2 className="text-lg font-semibold">Published</h2>
                <p className="text-3xl font-bold mt-2">18</p>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-white p-6 rounded-2xl shadow h-80">
              <h2 className="text-lg font-semibold mb-4">
                Blogs Published Over Time
              </h2>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="blogs" fill="#3B82F6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activeTab === "blogs" && (
          <div>
            <h1 className="text-2xl font-bold mb-6">Blogs</h1>
            <div className="bg-white rounded-2xl shadow overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-3">Title</th>
                    <th className="p-3">Author</th>
                    <th className="p-3">Date</th>
                    <th className="p-3">Status</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.map((blog) => (
                    <tr
                      key={blog.id}
                      className="border-b hover:bg-gray-50 transition"
                    >
                      <td className="p-3">{blog.title}</td>
                      <td className="p-3">{blog.author}</td>
                      <td className="p-3">{blog.date}</td>
                      <td className="p-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            blog.status === "Published"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {blog.status}
                        </span>
                      </td>
                      <td className="p-3 text-right space-x-2">
                        <button className="text-blue-600 hover:text-blue-800">
                          <Eye size={16} />
                        </button>
                        <button className="text-green-600 hover:text-green-800">
                          <Edit size={16} />
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "create" && <BlogCreationTab />}
      </main>
    </div>
  );
};

export default AdminBlogPanel;