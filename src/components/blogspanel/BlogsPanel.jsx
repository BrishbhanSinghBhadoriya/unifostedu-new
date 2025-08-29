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
                  >
                    <Link href={`/blog/${blog.slug || (blog._id || blog.id)}`} className="inline-flex">
                      <Eye size={16} />
                    </Link>
                  </button>
                  <Link
                    className="inline-flex text-green-600 hover:text-green-800"
                    title="Edit"
                    href={`/Create-Blog/${blog._id || blog.id}/edit`}
                  >
                    <Edit size={16} />
                  </Link>
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


