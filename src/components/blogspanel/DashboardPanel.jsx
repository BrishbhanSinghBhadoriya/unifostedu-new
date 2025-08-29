"use client";

import React, { useEffect, useState } from "react";
import { Card } from "./panelUI";
import { blogAPI } from "@/lib/axios";
import { FileText, FileClock, CheckCircle2, RefreshCcw } from "lucide-react";

export default function DashboardPanel() {
  const [loading, setLoading] = useState(true);
  const [totals, setTotals] = useState({ total: 0, drafts: 0, published: 0 });
  const [blogs, setBlogs] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);

  const load = async () => {
    setLoading(true);
    try {
      const res = await blogAPI.getAll();
      const list = res?.data?.blogs || res?.data?.data?.blogs || [];
      setBlogs(list);
      const total = list.length;
      const published = list.filter((b) => !!b.isPublished).length;
      const drafts = total - published;
      setTotals({ total, drafts, published });
      setLastUpdated(new Date());
    } catch {
      setBlogs([]);
      setTotals({ total: 0, drafts: 0, published: 0 });
      setLastUpdated(new Date());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const last4 = [...blogs]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 4);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <span>
            Last updated: {lastUpdated ? lastUpdated.toLocaleTimeString() : "--:--"}
          </span>
          <button
            onClick={load}
            className="ml-2 inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50"
            title="Refresh now"
          >
            <RefreshCcw size={16} /> Refresh
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
        <Card className="p-5 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-medium text-gray-600">Total Blogs</h2>
              <p className="text-3xl md:text-4xl font-extrabold mt-2 tracking-tight">
                {loading ? <span className="inline-block h-8 w-20 bg-gray-200 rounded animate-pulse" /> : totals.total}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
              <FileText size={22} />
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3">All blog posts in the system</p>
        </Card>

        <Card className="p-5 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-medium text-gray-600">Drafts</h2>
              <p className="text-3xl md:text-4xl font-extrabold mt-2 tracking-tight">
                {loading ? <span className="inline-block h-8 w-16 bg-gray-200 rounded animate-pulse" /> : totals.drafts}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-amber-50 text-amber-600">
              <FileClock size={22} />
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3">Unpublished drafts awaiting review</p>
        </Card>

        <Card className="p-5 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-medium text-gray-600">Published</h2>
              <p className="text-3xl md:text-4xl font-extrabold mt-2 tracking-tight">
                {loading ? <span className="inline-block h-8 w-16 bg-gray-200 rounded animate-pulse" /> : totals.published}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600">
              <CheckCircle2 size={22} />
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3">Live posts visible to readers</p>
        </Card>
      </div>

      {/* Last 4 blogs table */}
      <Card className="p-0 overflow-hidden">
        <div className="p-5 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Recent Blogs</h2>
          <span className="text-xs text-gray-500">Showing latest 4</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-600 text-sm">
              <tr>
                <th className="p-3 font-medium">Title</th>
                <th className="p-3 font-medium">Author</th>
                <th className="p-3 font-medium">Created</th>
                <th className="p-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                [...Array(4)].map((_, i) => (
                  <tr key={i} className="border-t">
                    <td className="p-3"><span className="inline-block h-4 w-48 bg-gray-200 rounded animate-pulse" /></td>
                    <td className="p-3"><span className="inline-block h-4 w-24 bg-gray-200 rounded animate-pulse" /></td>
                    <td className="p-3"><span className="inline-block h-4 w-28 bg-gray-200 rounded animate-pulse" /></td>
                    <td className="p-3"><span className="inline-block h-6 w-20 bg-gray-200 rounded-full animate-pulse" /></td>
                  </tr>
                ))
              ) : last4.length === 0 ? (
                <tr>
                  <td className="p-4 text-sm text-gray-500" colSpan={4}>No blogs found.</td>
                </tr>
              ) : (
                last4.map((b) => (
                  <tr key={b._id || b.id} className="border-t hover:bg-gray-50">
                    <td className="p-3">
                      <div className="line-clamp-1 font-medium text-gray-900">{b.title}</div>
                    </td>
                    <td className="p-3 text-gray-700">{b.author || "—"}</td>
                    <td className="p-3 text-gray-700">{new Date(b.createdAt).toLocaleString()}</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${b.isPublished ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
                        {b.isPublished ? "Published" : "Draft"}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}


