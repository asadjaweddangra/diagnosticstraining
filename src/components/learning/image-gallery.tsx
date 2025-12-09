import { ContentSection } from "@/types";

export function ImageGallery({ section }: { section: ContentSection }) {
  if (!("images" in section) || !section.images) return null;
  return (
    <div className="space-y-2">
      {section.title ? <h3 className="text-sm font-semibold text-ink">{section.title}</h3> : null}
      <div className="grid gap-3 sm:grid-cols-2">
        {section.images.map((img) => (
          <figure key={img.src} className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.caption || section.title || "Illustration"}
              className="w-full rounded-lg object-cover"
            />
            {img.caption ? <figcaption className="text-xs text-ink/60">{img.caption}</figcaption> : null}
          </figure>
        ))}
      </div>
    </div>
  );
}

