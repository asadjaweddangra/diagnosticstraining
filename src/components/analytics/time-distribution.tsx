"use client";

import {
  Pie,
  PieChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

type Slice = { name: string; value: number };

const COLORS = ["#7C3AED", "#06B6D4", "#F59E0B", "#F43F5E"];

export function TimeDistribution({ data }: { data: Slice[] }) {
  const chartData =
    data.length > 0
      ? data
      : [
          { name: "Ultrasound", value: 40 },
          { name: "Echo", value: 25 },
          { name: "EKG", value: 20 },
          { name: "Common", value: 15 },
        ];

  return (
    <ResponsiveContainer width="100%" height={260}>
      <PieChart>
        <Pie
          dataKey="value"
          data={chartData}
          cx="50%"
          cy="50%"
          outerRadius={90}
          label
        >
          {chartData.map((_, idx) => (
            <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}

