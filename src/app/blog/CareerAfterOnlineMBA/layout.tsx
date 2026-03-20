// File: app/blogs/layout.tsx
import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Metadata } from 'next';

interface BlogLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'UniFost Blog - Online MBA & Career Insights',
  description: 'Explore career opportunities, MBA programs, and educational insights from UniFost.',
  keywords: 'Online MBA, Career Paths, MBA Opportunities, Education Blog',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://unifostedu.com/blog',
    title: 'UniFost Blog',
    description: 'Career and Education Insights',
  },
};

const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Blog Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-8 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">UniFost Blog</h1>
          <p className="text-blue-100">Insights, Trends & Career Guidance</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        {children}
      </main>

     
    </div>
  );
};

export default BlogLayout;