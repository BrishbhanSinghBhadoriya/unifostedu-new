"use client";

import React from "react";
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Bar } from "recharts";
import { Card } from "./panelUI";

const data = [
  { name: "Jan", blogs: 4 },
  { name: "Feb", blogs: 7 },
  { name: "Mar", blogs: 3 },
  { name: "Apr", blogs: 8 },
  { name: "May", blogs: 6 },
  { name: "Jun", blogs: 10 },
];

export default function DashboardPanel() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold">Total Blogs</h2>
          <p className="text-3xl font-bold mt-2">24</p>
        </Card>
        <Card className="p-6">
          <h2 className="text-lg font-semibold">Drafts</h2>
          <p className="text-3xl font-bold mt-2">6</p>
        </Card>
        <Card className="p-6">
          <h2 className="text-lg font-semibold">Published</h2>
          <p className="text-3xl font-bold mt-2">18</p>
        </Card>
      </div>

      <Card className="p-6 h-80">
        <h2 className="text-lg font-semibold mb-4">Blogs Published Over Time</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="blogs" fill="#3B82F6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}


