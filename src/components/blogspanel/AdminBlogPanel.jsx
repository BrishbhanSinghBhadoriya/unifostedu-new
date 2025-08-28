"use client";

import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  LayoutDashboard,
  FileText,
  PlusSquare,
  Pause,
  Play,
  Edit,
  Trash2,
  Eye,
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

        {activeTab === "create" && (
          <div>
            <h1 className="text-2xl font-bold mb-6">Create Blog</h1>
            <div className="bg-white p-6 rounded-2xl shadow">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Title</label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Content</label>
                  <textarea
                    rows="6"
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium">Upload Image</label>
                  <input type="file" className="mt-1 block w-full" />
                </div>
                <div className="flex items-center space-x-3">
                  <input type="checkbox" id="publish" />
                  <label htmlFor="publish">Publish immediately</label>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Save Blog
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminBlogPanel;
