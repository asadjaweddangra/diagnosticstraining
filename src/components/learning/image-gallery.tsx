import Image from "next/image";
import { ContentSection } from "@/types";

export function ImageGallery({ section }: { section: ContentSection }) {
  if (!("images" in section) || !section.images) return null;
  return (
    <div className="space-y-2">
      {section.title ? <h3 className="text-sm font-semibold text-gray-900">{section.title}</h3> : null}
      <div className="grid gap-3 sm:grid-cols-2">
        {section.images.map((img) => (
          <figure key={img.src} className="space-y-2 rounded-lg bg-gray-50 p-3 border border-gray-200">
            <div className="relative h-48 w-full overflow-hidden rounded-lg">
              <Image
                src={img.src}
                alt={img.caption || section.title || "Illustration"}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {img.caption ? <figcaption className="text-xs text-gray-500">{img.caption}</figcaption> : null}
            {img.callouts ? (
              <ul className="space-y-1 rounded-lg bg-white p-2 text-xs border border-gray-200">
                {img.callouts.map((c) => (
                  <li key={c.label} className="flex gap-2">
                    <span className="font-semibold text-gray-900">{c.label}:</span>
                    <span className="text-gray-600">{c.detail}</span>
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

