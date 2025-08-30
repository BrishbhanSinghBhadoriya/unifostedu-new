"use client";

import React, { useEffect, useState } from "react";
import { Eye, Edit, Trash2 } from "lucide-react";
import { blogAPI } from "@/lib/axios";
import { toast } from "sonner";
import Link from "next/link";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import RichTextEditor from "./RichTextEditor";

export default function BlogsPanel() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [editDraft, setEditDraft] = useState({ 
    id: null, 
    title: "", 
    content: "",
    category: "",
    tags: [],
    isPublished: false
  });
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [toDelete, setToDelete] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      setLoading(true);
      try {
        const res = await blogAPI.getAll();
        const list = res?.data?.blogs || res?.data?.data?.blogs || [];
        if (mounted) setRows(list);
      } catch {
        if (mounted) setRows([]);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  const openEdit = (blog) => {
    setEditDraft({ 
      id: blog._id || blog.id, 
      title: blog.title || "", 
      content: blog.content || "",
      category: blog.category || "",
      tags: blog.tags || [],
      isPublished: blog.isPublished || false
    });
    setEditOpen(true);
  };

  const saveEdit = async () => {
    if (!editDraft.title?.trim()) {
      toast.error("Title cannot be empty");
      return;
    }
    if (!editDraft.content?.trim()) {
      toast.error("Content cannot be empty");
      return;
    }
    
    try {
      const updateData = {
        title: editDraft.title.trim(),
        content: editDraft.content.trim(),
        category: editDraft.category,
        tags: editDraft.tags,
        isPublished: editDraft.isPublished
      };
      
      await blogAPI.update(editDraft.id, updateData);
      
      // Update local state
      setRows((prev) => prev.map((b) => 
        (b._id || b.id) === editDraft.id 
          ? { ...b, ...updateData }
          : b
      ));
      
      setEditOpen(false);
      toast.success("Blog updated successfully!");
    } catch (e) {
      console.error('Update error:', e);
      toast.error("Failed to update blog");
    }
  };

  const confirmDelete = (blog) => {
    setToDelete(blog);
    setConfirmOpen(true);
  };

  const handleDelete = async () => {
    if (!toDelete) return;
    try {
      await blogAPI.remove(toDelete._id || toDelete.id);
      setRows((prev) => prev.filter((b) => (b._id || b.id) !== (toDelete._id || toDelete.id)));
      toast.success("Blog deleted successfully!");
    } catch (e) {
      toast.error("Failed to delete blog");
    } finally {
      setConfirmOpen(false);
      setToDelete(null);
    }
  };

  const addTag = (tag) => {
    if (tag && !editDraft.tags.includes(tag)) {
      setEditDraft(prev => ({ ...prev, tags: [...prev.tags, tag] }));
    }
  };

  const removeTag = (tagToRemove) => {
    setEditDraft(prev => ({ 
      ...prev, 
      tags: prev.tags.filter(tag => tag !== tagToRemove) 
    }));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Blogs</h1>
      <div className="bg-white rounded-2xl shadow overflow-hidden">
        {loading && (
          <div className="p-4 text-sm text-gray-500">Loading blogs...</div>
        )}
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
            {rows.map((blog) => (
              <tr key={blog._id || blog.id} className="border-b hover:bg-gray-50 transition">
                <td className="p-3">{blog.title}</td>
                <td className="p-3">{blog.author}</td>
                <td className="p-3">{new Date(blog.createdAt).toLocaleDateString()}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      blog.isPublished
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {blog.isPublished ? "Published" : "Draft"}
                  </span>
                </td>
                <td className="p-3 text-right space-x-2">
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    title="View"
                    onClick={() => {}}
                  >
                    <Link href={`/blog/${blog.slug || (blog._id || blog.id)}`} className="inline-flex">
                      <Eye size={16} />
                    </Link>
                  </button>
                  <button
                    className="text-green-600 hover:text-green-800"
                    title="Edit"
                    onClick={() => openEdit(blog)}
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800"
                    title="Delete"
                    onClick={() => confirmDelete(blog)}
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Enhanced Edit Dialog */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="w-screen md:w-full h-screen max-w-none max-h-none rounded-none">
          <DialogHeader>
            <DialogTitle>Edit Blog</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Title *</label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={editDraft.title}
                onChange={(e) => setEditDraft((d) => ({ ...d, title: e.target.value }))}
                placeholder="Enter blog title"
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Category</label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={editDraft.category}
                onChange={(e) => setEditDraft((d) => ({ ...d, category: e.target.value }))}
                placeholder="Enter category"
              />
            </div>

            {/* Tags */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Tags</label>
              <div className="flex gap-2 mb-2">
                <input
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Add a tag and press Enter"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addTag(e.target.value.trim());
                      e.target.value = '';
                    }
                  }}
                />
              </div>
              {editDraft.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {editDraft.tags.map((tag, index) => (
                    <span key={index} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm">
                      <span>{tag}</span>
                      <button 
                        onClick={() => removeTag(tag)} 
                        className="text-blue-500 hover:text-blue-700 ml-1"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Content *</label>
              <div className="border border-gray-300 rounded-md">
                <RichTextEditor
                  content={editDraft.content}
                  onContentChange={(content) => setEditDraft((d) => ({ ...d, content }))}
                />
              </div>
            </div>

            {/* Publish Status */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Status</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={editDraft.isPublished ? "published" : "draft"}
                onChange={(e) => setEditDraft((d) => ({ ...d, isPublished: e.target.value === "published" }))}
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
              <button 
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                onClick={() => setEditOpen(false)}
              >
                Cancel
              </button>
              <button 
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                onClick={saveEdit}
              >
                Save Changes
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this blog.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}


