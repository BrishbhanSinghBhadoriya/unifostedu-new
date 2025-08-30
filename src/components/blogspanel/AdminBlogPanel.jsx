"use client";

import React, { useMemo, useState } from "react";
import {
  Home,
  NotebookText,
  PlusCircle,
  Settings,
  Pencil,
  Trash2,
  Eye,
  CheckCircle2,
  Dot,
  ImageIcon,
  X,
  BarChart3,
  MessageSquare,
  Users,
  FileText,
  Archive,
  TrendingUp,
  Briefcase,
  Filter,
  SortAsc,
  CloudUpload,
  Save,
  
  
} from "lucide-react";

// --------- Small UI helpers ----------
const cx = (...c) => c.filter(Boolean).join(" ");

const Card = ({ className, children }) => (
  <div className={cx("bg-white rounded-2xl shadow-sm border border-gray-100", className)}>
    {children}
  </div>
);

const StatCard = ({ label, value, icon, className }) => (
  <Card className={cx("p-6", className)}>
    <div className="flex justify-between items-start">
      <div>
        <div className="text-sm text-gray-500">{label}</div>
        <div className="mt-2 text-3xl font-semibold text-gray-900">{value}</div>
      </div>
      {icon && <div className="p-2 bg-blue-100 rounded-lg text-blue-600">{icon}</div>}
    </div>
  </Card>
);

const Badge = ({ status }) => {
  const map = {
    published:
      "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium bg-green-100 text-green-700",
    draft:
      "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700",
  };
  return (
    <span className={map[status]}>
      <Dot className={status === "published" ? "text-green-600" : "text-gray-500"} size={18} />
      {status === "published" ? "Published" : "Draft"}
    </span>
  );
};

const PrimaryButton = ({ children, className, ...rest }) => (
  <button
    {...rest}
    className={cx(
      "inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 active:bg-blue-800 transition",
      className
    )}
  >
    {children}
  </button>
);

const SecondaryButton = ({ children, className, ...rest }) => (
  <button
    {...rest}
    className={cx(
      "inline-flex items-center gap-2 rounded-xl bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200 active:bg-gray-300 transition",
      className
    )}
  >
    {children}
  </button>
);

const ActionButton = ({ children, className, ...rest }) => (
  <button
    {...rest}
    className={cx(
      "p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition",
      className
    )}
  >
    {children}
  </button>
);

// --------- Image Gallery Component ----------
const ImageGallery = ({ images, onRemove, onAdd }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      const newImages = files.map(file => URL.createObjectURL(file));
      onAdd(newImages);
    }
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const newImages = files.map(file => URL.createObjectURL(file));
      onAdd(newImages);
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Blog Images</h3>
      
      <div 
        className={cx(
          "border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center cursor-pointer transition-colors",
          isDragging ? "border-blue-500 bg-blue-50" : "hover:border-gray-400"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById('image-upload').click()}
      >
        <CloudUpload className="mx-auto text-gray-400" size={32} />
        <p className="mt-2 text-sm text-gray-600">
          Drag & drop images here or click to browse
        </p>
        <p className="text-xs text-gray-500">
          Supports JPG, PNG up to 10MB each
        </p>
        <input
          id="image-upload"
          type="file"
          multiple
          accept="image/*"
          className="hidden"
          onChange={handleFileSelect}
        />
      </div>

      {images.length > 0 && (
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div key={index} className="relative group">
              <img
                src={img}
                alt={`Blog image ${index + 1}`}
                className="w-full h-32 object-cover rounded-lg"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onRemove(index);
                }}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// --------- Tag Input Component ----------
const TagInput = ({ tags, onAddTag, onRemoveTag }) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault();
      onAddTag(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <div className="flex flex-wrap gap-2 p-3 border border-gray-200 rounded-xl">
      {tags.map((tag, index) => (
        <span key={index} className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
          {tag}
          <button 
            onClick={() => onRemoveTag(index)}
            className="text-blue-600 hover:text-blue-800"
          >
            <X size={14} />
          </button>
        </span>
      ))}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Add tags..."
        className="flex-1 min-w-[100px] outline-none bg-transparent"
      />
    </div>
  );
};

// --------- Mock data ----------
const MOCK_BLOGS = [
  {
    id: "1",
    title: "Top Colleges 2025",
    author: "Admin",
    createdAt: "2025-08-28T10:00:00Z",
    status: "published",
    images: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "Education",
    tags: ["education", "college", "career"]
  },
  {
    id: "2",
    title: "How to Apply Abroad",
    author: "Bhumika",
    createdAt: "2025-08-20T10:00:00Z",
    status: "draft",
    images: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "Study Abroad",
    tags: ["abroad", "application"]
  },
];

// --------- Pages ----------
function DashboardPage({ blogs, onGoCreate }) {
  const stats = useMemo(() => {
    const total = blogs.length;
    const drafts = blogs.filter((b) => b.status === "draft").length;
    const published = blogs.filter((b) => b.status === "published").length;
    return { total, drafts, published };
  }, [blogs]);

  return (
    <div className="p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <PrimaryButton onClick={onGoCreate}>
          <PlusCircle size={18} />
          Create Blog
        </PrimaryButton>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatCard label="Total Blogs" value={stats.total} icon={<NotebookText size={20} />} />
        <StatCard label="Drafts" value={stats.drafts} icon={<FileText size={20} />} />
        <StatCard label="Published Blogs" value={stats.published} icon={<Eye size={20} />} />
      </div>

      <h2 className="mt-10 text-xl font-semibold text-gray-900">Blog List</h2>
      <Card className="mt-4 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="bg-gray-50 text-sm text-gray-500">
              <tr>
                <th className="px-6 py-3 font-medium">Title</th>
                <th className="px-6 py-3 font-medium">Author</th>
                <th className="px-6 py-3 font-medium">Date</th>
                <th className="px-6 py-3 font-medium">Images</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {blogs.map((b) => (
                <tr key={b.id} className="text-sm">
                  <td className="px-6 py-4 font-medium text-gray-900">{b.title}</td>
                  <td className="px-6 py-4 text-gray-700">{b.author}</td>
                  <td className="px-6 py-4 text-gray-700">
                    {new Date(b.createdAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex -space-x-2">
                      {b.images.slice(0, 3).map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt=""
                          className="w-8 h-8 rounded-full border-2 border-white object-cover"
                        />
                      ))}
                      {b.images.length > 3 && (
                        <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-medium">
                          +{b.images.length - 3}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge status={b.status} />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-3 text-gray-500">
                      <button className="hover:text-gray-800" title="Edit">
                        <Pencil size={18} />
                      </button>
                      <button className="hover:text-gray-800" title="Delete">
                        <Trash2 size={18} />
                      </button>
                      <button className="hover:text-gray-800" title="Preview">
                        <Eye size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {blogs.length === 0 && (
                <tr>
                  <td className="px-6 py-10 text-center text-gray-500" colSpan={6}>
                    No blogs yet. Create your first post!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

function CreateBlogPage({ onCreated }) {
  const [form, setForm] = useState({
    title: "",
    content: "",
    author: "Admin",
    status: "draft",
    images: [],
    category: "Education",
    tags: [],
    embedContent: "",
    metaTitle: "",
    metaDescription: "",
    slug: "",
    focusKeywords: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreated?.({
      id: String(Math.random()).slice(2),
      title: form.title.trim() || "Untitled",
      author: form.author.trim() || "Admin",
      createdAt: new Date().toISOString(),
      status: form.status,
      images: form.images,
      category: form.category,
      tags: form.tags,
    });
    setForm({ 
      title: "", 
      content: "", 
      author: "Admin", 
      status: "draft", 
      images: [], 
      category: "Education",
      tags: [],
      embedContent: "",
      metaTitle: "",
      metaDescription: "",
      slug: "",
      focusKeywords: ""
    });
  };

  const addImages = (newImages) => {
    setForm(prev => ({
      ...prev,
      images: [...prev.images, ...newImages]
    }));
  };

  const removeImage = (index) => {
    setForm(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const addTag = (tag) => {
    setForm(prev => ({
      ...prev,
      tags: [...prev.tags, tag]
    }));
  };

  const removeTag = (index) => {
    setForm(prev => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Create Blog Post</h1>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Form */}
        <div className="space-y-6">
          <Card>
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">Content</h2>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Blog Title</label>
                <input
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter blog title"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Blog Content</label>
                <textarea
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 h-48 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your content..."
                  value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Embed Content (YouTube, Twitter, etc.)</label>
                <input
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Paste embed code or URL"
                  value={form.embedContent}
                  onChange={(e) => setForm({ ...form, embedContent: e.target.value })}
                />
              </div>

              <ImageGallery 
                images={form.images} 
                onAdd={addImages}
                onRemove={removeImage}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                  >
                    <option value="Education">Education</option>
                    <option value="Technology">Technology</option>
                    <option value="Career">Career</option>
                    <option value="Study Abroad">Study Abroad</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                  <input
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Author name"
                    value={form.author}
                    onChange={(e) => setForm({ ...form, author: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
                <TagInput 
                  tags={form.tags} 
                  onAddTag={addTag}
                  onRemoveTag={removeTag}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <div className="flex items-center gap-4">
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="radio"
                      name="status"
                      value="draft"
                      checked={form.status === "draft"}
                      onChange={(e) => setForm({ ...form, status: e.target.value })}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-700">Draft</span>
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="radio"
                      name="status"
                      value="published"
                      checked={form.status === "published"}
                      onChange={(e) => setForm({ ...form, status: e.target.value })}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-700">Publish</span>
                  </label>
                </div>
              </div>
            </form>
          </Card>

          <Card>
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">SEO Metadata</h2>
            </div>
            <div className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Meta Title</label>
                <input
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Meta title for SEO"
                  value={form.metaTitle}
                  onChange={(e) => setForm({ ...form, metaTitle: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
                <textarea
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 h-32 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Meta description for SEO"
                  value={form.metaDescription}
                  onChange={(e) => setForm({ ...form, metaDescription: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
                  <input
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="URL slug"
                    value={form.slug}
                    onChange={(e) => setForm({ ...form, slug: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Focus Keywords</label>
                  <input
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Comma separated keywords"
                    value={form.focusKeywords}
                    onChange={(e) => setForm({ ...form, focusKeywords: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </Card>

          <div className="flex justify-end gap-3">
            <SecondaryButton>
              <X size={18} />
              Cancel
            </SecondaryButton>
            <SecondaryButton>
              <Save size={18} />
              Save Draft
            </SecondaryButton>
            <PrimaryButton type="submit" onClick={handleSubmit}>
              <PaperPlane size={18} />
              Publish Now
            </PrimaryButton>
          </div>
        </div>

        {/* Right Column - Preview */}
        <div className="lg:sticky lg:top-6 h-fit">
          <Card>
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Live Preview</h2>
              <SecondaryButton>
                <Sync size={18} />
                Refresh
              </SecondaryButton>
            </div>
            <div className="p-6">
              <div className="text-center mb-6 pb-6 border-b border-gray-100">
                <h1 className="text-2xl font-bold text-gray-900 mb-3">
                  {form.title || "Blog Title Preview"}
                </h1>
                <div className="flex justify-center gap-4 text-sm text-gray-500">
                  <span>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span>By {form.author}</span>
                  <span>{form.category}</span>
                </div>
              </div>

              {form.images.length > 0 ? (
                <img
                  src={form.images[0]}
                  alt="Blog preview"
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
              ) : (
                <div className="w-full h-48 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                  <ImageIcon className="text-gray-400" size={32} />
                </div>
              )}

              <div className="prose max-w-none mb-6">
                {form.content ? (
                  <p>{form.content}</p>
                ) : (
                  <>
                    <p>Your blog content will appear here. Start typing in the content field to see a live preview of your blog post.</p>
                    <p>This preview will update as you type, allowing you to see exactly how your blog will look to readers.</p>
                    <h2>Embedded Content Preview</h2>
                    <p>Any embedded content (like YouTube videos or tweets) will appear here.</p>
                  </>
                )}
              </div>

              {form.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {form.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function BlogsPage({ blogs }) {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Blogs</h1>
        <div className="flex gap-2">
          <ActionButton>
            <Filter size={16} />
          </ActionButton>
          <ActionButton>
            <SortAsc size={16} />
          </ActionButton>
        </div>
      </div>

      <Card className="mt-6 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="bg-gray-50 text-sm text-gray-500">
              <tr>
                <th className="px-6 py-3 font-medium">Title</th>
                <th className="px-6 py-3 font-medium">Author</th>
                <th className="px-6 py-3 font-medium">Date</th>
                <th className="px-6 py-3 font-medium">Images</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {blogs.map((b) => (
                <tr key={b.id} className="text-sm">
                  <td className="px-6 py-4 font-medium text-gray-900">{b.title}</td>
                  <td className="px-6 py-4 text-gray-700">{b.author}</td>
                  <td className="px-6 py-4 text-gray-700">
                    {new Date(b.createdAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex -space-x-2">
                      {b.images.slice(0, 3).map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt=""
                          className="w-8 h-8 rounded-full border-2 border-white object-cover"
                        />
                      ))}
                      {b.images.length > 3 && (
                        <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-medium">
                          +{b.images.length - 3}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge status={b.status} />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-3 text-gray-500">
                      <button className="hover:text-gray-800" title="Edit">
                        <Pencil size={18} />
                      </button>
                      <button className="hover:text-gray-800" title="Delete">
                        <Trash2 size={18} />
                      </button>
                      <button className="hover:text-gray-800" title="Preview">
                        <Eye size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {blogs.length === 0 && (
                <tr>
                  <td className="px-6 py-10 text-center text-gray-500" colSpan={6}>
                    No blogs found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

// --------- Shell Layout with Sidebar ----------
export default function AdminBlogPanel() {
  const [tab, setTab] = useState("dashboard"); // 'dashboard' | 'blogs' | 'create'
  const [blogs, setBlogs] = useState(MOCK_BLOGS);

  const nav = [
    { key: "dashboard", icon: <Home size={18} />, label: "Dashboard" },
    { key: "blogs", icon: <NotebookText size={18} />, label: "Blogs" },
    { key: "create", icon: <PlusCircle size={18} />, label: "Create Blog" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-[1800px] px-4 py-6">
        <Card className="overflow-hidden">
          <div className="flex">
            {/* Sidebar */}
            <aside className="w-[260px] bg-[#141922] text-white p-5 hidden md:block">
              <div className="flex items-center gap-3 px-2">
                <div className="h-9 w-9 rounded-xl bg-blue-600 grid place-items-center">📘</div>
                <div className="text-lg font-semibold">BlogDash</div>
              </div>

              <nav className="mt-6 space-y-2">
                {nav.map((n) => (
                  <button
                    key={n.key}
                    onClick={() => setTab(n.key)}
                    className={cx(
                      "w-full flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition",
                      tab === n.key
                        ? "bg-white/10"
                        : "hover:bg-white/5 text-white/80 hover:text-white"
                    )}
                  >
                    {n.icon}
                    {n.label}
                  </button>
                ))}

                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3 px-3 py-2 text-white/50">
                    <Settings size={18} />
                    Settings
                  </div>
                </div>
              </nav>
            </aside>

            {/* Main */}
            <main className="flex-1 bg-white">
              {tab === "dashboard" && (
                <DashboardPage
                  blogs={blogs}
                  onGoCreate={() => setTab("create")}
                />
              )}
              {tab === "blogs" && <BlogsPage blogs={blogs} />}
              {tab === "create" && (
                <CreateBlogPage
                  onCreated={(b) => {
                    setBlogs((prev) => [b, ...prev]);
                    setTab("blogs");
                  }}
                />
              )}
            </main>
          </div>
        </Card>
      </div>
    </div>
  );
}