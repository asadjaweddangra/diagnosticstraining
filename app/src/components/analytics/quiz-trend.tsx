"use client";

import {
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

type Attempt = {
  created_at: string;
  score: number;
};

type Props = {
  attempts: Attempt[];
};

export function QuizTrend({ attempts }: Props) {
  const chartData =
    attempts.length > 0
      ? attempts
          .slice(0, 10)
          .reverse()
          .map((a, idx) => ({
            label: a.created_at
              ? new Date(a.created_at).toLocaleDateString()
              : `Attempt ${idx + 1}`,
            score: a.score,
          }))
      : [
          { label: "Sample 1", score: 65 },
          { label: "Sample 2", score: 78 },
          { label: "Sample 3", score: 82 },
          { label: "Sample 4", score: 88 },
        ];

  return (
    <ResponsiveContainer width="100%" height={240}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" tickLine={false} />
        <YAxis domain={[0, 100]} tickLine={false} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="score"
          stroke="#7C3AED"
          strokeWidth={2}
          dot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

