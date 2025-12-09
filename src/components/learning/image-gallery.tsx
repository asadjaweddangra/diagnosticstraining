import Image from "next/image";
import { ContentSection } from "@/types";

export function ImageGallery({ section }: { section: ContentSection }) {
  if (!("images" in section) || !section.images) return null;
  return (
    <div className="space-y-2">
      {section.title ? <h3 className="text-sm font-semibold text-ink">{section.title}</h3> : null}
      <div className="grid gap-3 sm:grid-cols-2">
        {section.images.map((img) => (
          <figure key={img.src} className="space-y-2 rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
            <div className="relative h-48 w-full overflow-hidden rounded-lg">
              <Image
                src={img.src}
                alt={img.caption || section.title || "Illustration"}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {img.caption ? <figcaption className="text-xs text-ink/60">{img.caption}</figcaption> : null}
            {img.callouts ? (
              <ul className="space-y-1 rounded-xl bg-white/5 p-2 text-xs text-ink/80 ring-1 ring-white/10">
                {img.callouts.map((c) => (
                  <li key={c.label} className="flex gap-2">
                    <span className="font-semibold text-ink">{c.label}:</span>
                    <span className="text-ink/80">{c.detail}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </figure>
        ))}
      </div>
    </div>
  );
}

