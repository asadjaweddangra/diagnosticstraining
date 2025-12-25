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
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      {title ? <h4 className="text-sm font-semibold text-gray-900">{title}</h4> : null}
      <figure className="mt-3 space-y-2 rounded-lg bg-gray-50 p-3 border border-gray-200">
        <div className="relative h-56 w-full overflow-hidden rounded-lg">
          <Image src={image} alt={caption || title || "Anatomy"} fill sizes="100vw" className="object-cover" />
        </div>
        {caption ? <figcaption className="text-xs text-gray-500">{caption}</figcaption> : null}
      </figure>
      {markers.length ? (
        <div className="mt-3 space-y-2">
          {markers.map((m) => (
            <div key={m.label} className="rounded-lg bg-gray-50 px-3 py-2 text-sm border border-gray-200">
              <p className="font-semibold text-gray-900">{m.label}</p>
              {m.detail ? <p className="text-xs text-gray-600">{m.detail}</p> : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

