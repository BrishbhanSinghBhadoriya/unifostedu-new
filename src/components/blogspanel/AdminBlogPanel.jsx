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
} from "lucide-react";

// --------- Small UI helpers ----------
const cx = (...c) => c.filter(Boolean).join(" ");

const Card = ({ className, children }) => (
  <div className={cx("bg-white rounded-2xl shadow-sm border border-gray-100", className)}>
    {children}
  </div>
);

const StatCard = ({ label, value }) => (
  <Card className="p-6">
    <div className="text-sm text-gray-500">{label}</div>
    <div className="mt-2 text-3xl font-semibold text-gray-900">{value}</div>
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

// --------- Mock data ----------
const MOCK_BLOGS = [
  {
    id: "1",
    title: "Top Colleges 2025",
    author: "Admin",
    createdAt: "2025-08-28T10:00:00Z",
    status: "published",
  },
  {
    id: "2",
    title: "How to Apply Abroad",
    author: "Bhumika",
    createdAt: "2025-08-20T10:00:00Z",
    status: "draft",
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
        <StatCard label="Total Blogs" value={stats.total} />
        <StatCard label="Drafts" value={stats.drafts} />
        <StatCard label="Published Blogs" value={stats.published} />
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
                  <td className="px-6 py-10 text-center text-gray-500" colSpan={5}>
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

function BlogsPage({ blogs }) {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Blogs</h1>
      </div>

      <Card className="mt-6 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="bg-gray-50 text-sm text-gray-500">
              <tr>
                <th className="px-6 py-3 font-medium">Title</th>
                <th className="px-6 py-3 font-medium">Author</th>
                <th className="px-6 py-3 font-medium">Date</th>
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
                  <td className="px-6 py-10 text-center text-gray-500" colSpan={5}>
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

function CreateBlogPage({ onCreated }) {
  const [form, setForm] = useState({
    title: "",
    content: "",
    author: "",
    status: "draft",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreated?.({
      id: String(Math.random()).slice(2),
      title: form.title.trim() || "Untitled",
      author: form.author.trim() || "Admin",
      createdAt: new Date().toISOString(),
      status: form.status,
    });
    setForm({ title: "", content: "", author: "", status: "draft" });
  };

  return (
    <div className="p-8 max-w-3xl">
      <h1 className="text-2xl font-bold text-gray-900">Create Blog</h1>

      <Card className="mt-6">
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter blog title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Content</label>
            <textarea
              className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 h-48 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your content..."
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Author</label>
              <input
                className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Author name"
                value={form.author}
                onChange={(e) => setForm({ ...form, author: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <div className="mt-1 flex items-center gap-3">
                <label className="inline-flex items-center gap-2">
                  <input
                    type="radio"
                    name="status"
                    value="draft"
                    checked={form.status === "draft"}
                    onChange={(e) => setForm({ ...form, status: e.target.value })}
                    className="accent-blue-600"
                  />
                  <span className="text-sm text-gray-700">Draft</span>
                </label>
                <label className="inline-flex items-center gap-2">
                  <input
                    type="radio"
                    name="status"
                    value="published"
                    checked={form.status === "published"}
                    onChange={(e) => setForm({ ...form, status: e.target.value })}
                    className="accent-blue-600"
                  />
                  <span className="text-sm text-gray-700">Publish</span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <CheckCircle2 size={18} />
              Auto-saved
            </div>
            <PrimaryButton type="submit">
              <PlusCircle size={18} />
              Publish / Save
            </PrimaryButton>
          </div>
        </form>
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
    // { key: "settings", icon: <Settings size={18} />, label: "Settings" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-[1200px] px-4 py-6">
        <Card className="overflow-hidden">
          <div className="flex">
            {/* Sidebar */}
            <aside className="w-[260px] bg-[#141922] text-white p-5 hidden md:block">
              <div className="flex items-center gap-3 px-2">
                <div className="h-9 w-9 rounded-xl bg-blue-600 grid place-items-center">📘</div>
                <div className="text-lg font-semibold">Unifost</div>
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

                <div className="mt-6 flex items-center gap-3 px-3 py-2 text-white/50">
                  <Settings size={18} />
                  Settings (soon)
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
