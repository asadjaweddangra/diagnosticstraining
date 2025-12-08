"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

type Point = { area: string; value: number };

export function RadarCompetency({ data }: { data: Point[] }) {
  const chartData =
    data.length > 0
      ? data
      : [
          { area: "Ultrasound", value: 60 },
          { area: "Echo", value: 45 },
          { area: "EKG", value: 50 },
          { area: "Common", value: 70 },
        ];

  return (
    <ResponsiveContainer width="100%" height={260}>
      <RadarChart data={chartData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="area" />
        <Radar
          name="Competency"
          dataKey="value"
          stroke="#06B6D4"
          fill="#06B6D4"
          fillOpacity={0.3}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

