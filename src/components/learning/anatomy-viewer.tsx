type Marker = {
  label: string;
  detail?: string;
};

import Image from "next/image";

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
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm">
      {title ? <h4 className="text-sm font-semibold text-ink">{title}</h4> : null}
      <figure className="mt-3 space-y-2 rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
        <div className="relative h-56 w-full overflow-hidden rounded-lg">
          <Image src={image} alt={caption || title || "Anatomy"} fill sizes="100vw" className="object-cover" />
        </div>
        {caption ? <figcaption className="text-xs text-ink/60">{caption}</figcaption> : null}
      </figure>
      {markers.length ? (
        <div className="mt-3 space-y-2">
          {markers.map((m) => (
            <div key={m.label} className="rounded-lg bg-white/5 px-3 py-2 text-sm ring-1 ring-white/10">
              <p className="font-semibold text-ink">{m.label}</p>
              {m.detail ? <p className="text-xs text-ink/70">{m.detail}</p> : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

