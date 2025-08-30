'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { blogAPI } from '@/lib/axios';
import { Calendar, User, Tag, ArrowLeft, Clock, Eye, Share2 } from 'lucide-react';

export default function BlogPage() {
  const params = useParams();
  const slug = params.slug;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) return;
      
      try {
        setLoading(true);
        const response = await blogAPI.getById(slug);
        const apiBlog = response?.data?.blog || response?.data?.data || response?.data;
        
        if (apiBlog) {
          const blogData = {
            title: apiBlog.title || 'Untitled',
            content: apiBlog.content || '<p>Content not available</p>',
            author: apiBlog.author || 'Unknown Author',
            date: apiBlog.createdAt || apiBlog.date || new Date().toISOString(),
            category: apiBlog.category || 'General',
            tags: apiBlog.tags || [],
            thumbnail: apiBlog.thumbnail || null
          };
          
          setBlog(blogData);
          
          // Calculate reading time
          const textContent = blogData.content.replace(/<[^>]*>/g, '');
          const words = textContent.split(/\s+/).length;
          const time = Math.ceil(words / 200); // Average reading speed: 200 words per minute
          setReadingTime(time);
        } else {
          setError(true);
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Hero Section Skeleton */}
            <div className="h-64 sm:h-80 lg:h-96 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>
            
            <div className="p-6 sm:p-8 lg:p-12">
              {/* Title Skeleton */}
              <div className="h-8 bg-gray-200 rounded-lg w-3/4 mb-4 animate-pulse"></div>
              <div className="h-10 bg-gray-200 rounded-lg w-1/2 mb-6 animate-pulse"></div>
              
              {/* Meta Skeleton */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="h-6 bg-gray-200 rounded w-24 animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded w-32 animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded w-20 animate-pulse"></div>
              </div>
              
              {/* Content Skeleton */}
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    notFound();
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: `Check out this blog: ${blog.title}`,
        url: window.location.href
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header Navigation */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/blog/blog-page"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Blogs</span>
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Hero Section */}
          {blog.thumbnail && (
            <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
              <img 
                src={blog.thumbnail} 
                alt={blog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          )}
          
          <div className="p-6 sm:p-8 lg:p-12">
            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
                {blog.category}
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {blog.title}
            </h1>
            
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8 text-gray-600">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-blue-500" />
                <span className="font-medium">{blog.author}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-green-500" />
                <span>{formatDate(blog.date)}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-500" />
                <span>{readingTime} min read</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-purple-500" />
                <span>Reading</span>
              </div>
            </div>
            
            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-8">
                <Tag className="w-4 h-4 text-gray-400" />
                {blog.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
            
            {/* Content */}
            <div className="prose prose-lg sm:prose-xl lg:prose-2xl max-w-none text-gray-700 leading-relaxed">
              <div 
                dangerouslySetInnerHTML={{ __html: blog.content }}
                className="[&>h1]:text-3xl [&>h1]:font-bold [&>h1]:text-gray-900 [&>h1]:mb-6 [&>h1]:mt-8
                           [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-gray-800 [&>h2]:mb-4 [&>h2]:mt-6
                           [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-gray-800 [&>h3]:mb-3 [&>h3]:mt-5
                           [&>p]:mb-4 [&>p]:leading-relaxed
                           [&>ul]:mb-4 [&>ul]:pl-6 [&>ul]:space-y-2
                           [&>ol]:mb-4 [&>ol]:pl-6 [&>ol]:space-y-2
                           [&>li]:mb-1
                           [&>blockquote]:border-l-4 [&>blockquote]:border-blue-500 [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-gray-600 [&>blockquote]:my-6
                           [&>code]:bg-gray-100 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-sm [&>code]:font-mono
                           [&>pre]:bg-gray-900 [&>pre]:text-white [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:overflow-x-auto [&>pre]:my-6
                           [&>img]:rounded-lg [&>img]:shadow-lg [&>img]:my-6 [&>img]:max-w-full [&>img]:h-auto
                           [&>a]:text-blue-600 [&>a]:underline [&>a]:hover:text-blue-800
                           [&>table]:w-full [&>table]:border-collapse [&>table]:my-6
                           [&>th]:border [&>th]:border-gray-300 [&>th]:px-4 [&>th]:py-2 [&>th]:bg-gray-50 [&>th]:font-semibold
                           [&>td]:border [&>td]:border-gray-300 [&>td]:px-4 [&>td]:py-2"
              />
            </div>
            
            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleShare}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                    Share Article
                  </button>
                </div>
                
                <Link 
                  href="/blog/blog-page"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blogs
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}


