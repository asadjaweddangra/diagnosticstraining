"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Point = { name: string; signups: number; subscribers: number };

const sample: Point[] = [
  { name: "Jan", signups: 18, subscribers: 12 },
  { name: "Feb", signups: 24, subscribers: 16 },
  { name: "Mar", signups: 30, subscribers: 20 },
  { name: "Apr", signups: 26, subscribers: 19 },
  { name: "May", signups: 32, subscribers: 23 },
  { name: "Jun", signups: 28, subscribers: 22 },
];

export function ActivityChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={sample} barSize={12}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" tickLine={false} axisLine={false} />
        <YAxis tickLine={false} axisLine={false} />
        <Tooltip cursor={{ fill: "#f8fafc" }} />
        <Bar dataKey="signups" fill="#06B6D4" radius={[8, 8, 8, 8]} />
        <Bar dataKey="subscribers" fill="#7C3AED" radius={[8, 8, 8, 8]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

