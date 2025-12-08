type Props = {
  value: number; // 0-100
  label?: string;
};

export function ProgressRing({ value, label }: Props) {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex items-center gap-3">
      <svg width="72" height="72" className="-rotate-90">
        <circle
          cx="36"
          cy="36"
          r={radius}
          stroke="#e2e8f0"
          strokeWidth="8"
          fill="transparent"
        />
        <circle
          cx="36"
          cy="36"
          r={radius}
          stroke="url(#grad)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>
      <div>
        <p className="text-2xl font-bold text-slate-900">{value}%</p>
        {label ? <p className="text-xs text-slate-500">{label}</p> : null}
      </div>
    </div>
  );
}

