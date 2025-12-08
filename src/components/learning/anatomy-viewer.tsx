type Marker = {
  label: string;
  detail?: string;
};

export function AnatomyViewer({
  title,
  image,
  caption,
  markers = [],
}: {
  title?: string;
  image: string;
  caption?: string;
  markers?: Marker[];
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
      {title ? <h4 className="text-sm font-semibold text-slate-900">{title}</h4> : null}
      <figure className="mt-3 space-y-2 rounded-xl bg-slate-50 p-3 ring-1 ring-slate-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={caption || title || "Anatomy"} className="w-full rounded-lg object-cover" />
        {caption ? <figcaption className="text-xs text-slate-500">{caption}</figcaption> : null}
      </figure>
      {markers.length ? (
        <div className="mt-3 space-y-2">
          {markers.map((m) => (
            <div key={m.label} className="rounded-lg bg-slate-50 px-3 py-2 text-sm ring-1 ring-slate-100">
              <p className="font-semibold text-slate-900">{m.label}</p>
              {m.detail ? <p className="text-xs text-slate-600">{m.detail}</p> : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

