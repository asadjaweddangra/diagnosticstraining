import Image from "next/image";

type Annotation = {
  x: number;
  y: number;
  label: string;
  description: string;
};

export function AnnotatedImage({
  title,
  src,
  alt,
  caption,
  annotations,
}: {
  title?: string;
  src: string;
  alt: string;
  caption?: string;
  annotations: Annotation[];
}) {
  return (
    <div className="space-y-2">
      {title ? <h3 className="text-sm font-semibold text-ink">{title}</h3> : null}
      <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10">
        <div className="relative h-64 w-full">
          <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
        </div>
        {annotations.map((a, idx) => (
          <button
            key={`${a.label}-${idx}`}
            className="group absolute rounded-full bg-primary-500/90 px-2 py-1 text-[11px] font-bold text-white shadow"
            style={{ top: `${a.y}%`, left: `${a.x}%`, transform: "translate(-50%, -50%)" }}
            title={a.label}
          >
            {idx + 1}
            <div className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 hidden w-56 -translate-x-1/2 rounded-xl bg-slate-900/95 p-3 text-left text-xs text-slate-100 shadow-lg ring-1 ring-white/10 group-hover:block">
              <p className="font-semibold text-slate-50">{a.label}</p>
              <p className="text-slate-200/80">{a.description}</p>
            </div>
          </button>
        ))}
      </div>
      {caption ? <p className="text-xs text-ink/60">{caption}</p> : null}
      {annotations.length ? (
        <ul className="space-y-1 rounded-xl bg-white/5 p-3 text-xs text-ink/80 ring-1 ring-white/10">
          {annotations.map((a, idx) => (
            <li key={`${a.label}-${idx}`} className="flex gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-500/15 text-primary-100 font-semibold">
                {idx + 1}
              </span>
              <div>
                <p className="font-semibold text-ink">{a.label}</p>
                <p className="text-ink/80">{a.description}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

