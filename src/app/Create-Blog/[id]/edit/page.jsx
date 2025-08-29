"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { blogAPI } from "@/lib/axios";
import RichTextEditor from "@/components/blogspanel/RichTextEditor";
import { toast } from "sonner";
import { ArrowLeft, Save } from "lucide-react";

export default function EditBlogPage() {
  const { id } = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState([]);
  const [isPublished, setIsPublished] = useState(false);

  useEffect(() => {
    // Auth guard similar to Create-Blog page
    try {
      const hasToken = document.cookie.split(";").some((c) => c.trim().startsWith("admin_token="));
      if (!hasToken) router.replace("/admin");
    } catch {
      router.replace("/admin");
    }
  }, [router]);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const res = await blogAPI.getById(id);
        const data = res?.data?.blog || res?.data?.data || res?.data;
        setTitle(data?.title || "");
        setContent(data?.content || "");
        setCategory(data?.category || "");
        setTags(Array.isArray(data?.tags) ? data.tags : []);
        setIsPublished(!!data?.isPublished);
      } catch (e) {
        console.error(e);
        toast.error("Failed to load blog");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  const onAddTag = (value) => {
    const v = (value || "").trim();
    if (!v) return;
    setTags((prev) => (prev.includes(v) ? prev : [...prev, v]));
  };

  const onRemoveTag = (value) => {
    setTags((prev) => prev.filter((t) => t !== value));
  };

  const onSave = async () => {
    if (!title.trim()) {
      toast.error("Title is required");
      return;
    }
    if (!content.trim()) {
      toast.error("Content is required");
      return;
    }
    setSaving(true);
    try {
      await blogAPI.update(id, {
        title: title.trim(),
        content: content.trim(),
        category,
        tags,
        isPublished,
      });
      toast.success("Blog updated successfully");
      router.push("/Create-Blog");
    } catch (e) {
      console.error(e);
      toast.error("Failed to update blog");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto p-6">
          <div className="h-10 w-48 bg-gray-200 rounded animate-pulse mb-4" />
          <div className="h-12 w-2/3 bg-gray-200 rounded animate-pulse mb-6" />
          <div className="h-96 w-full bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <button
            onClick={() => router.push("/Create-Blog")}
            className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900"
          >
            <ArrowLeft size={18} />
            <span className="font-medium">Back</span>
          </button>
          <button
            onClick={onSave}
            disabled={saving}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-60"
          >
            <Save size={18} />
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 space-y-6">
          <h1 className="text-2xl font-bold">Edit Blog</h1>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Title *</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter blog title"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Category</label>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="e.g., News, MBA, BBA"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Add Tag</label>
              <input
                placeholder="Type a tag and press Enter"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    onAddTag(e.currentTarget.value);
                    e.currentTarget.value = "";
                  }
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700">
                  <span>#{t}</span>
                  <button onClick={() => onRemoveTag(t)} className="text-blue-600 hover:text-blue-800">×</button>
                </span>
              ))}
            </div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Status</label>
            <select
              value={isPublished ? "published" : "draft"}
              onChange={(e) => setIsPublished(e.target.value === "published")}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Content *</label>
            <div className="border border-gray-200 rounded-xl">
              <RichTextEditor content={content} onContentChange={setContent} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
