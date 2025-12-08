type Section = {
  title?: string;
  body?: string;
  items?: string[];
  links?: { label: string; href: string }[];
  callout?: string;
  image?: string;
  caption?: string;
};

export function ContentRenderer({ content }: { content: any }) {
  if (!content) return null;
  const sections: Section[] = content.sections ?? [];

  return (
    <div className="space-y-4">
      {sections.map((section, idx) => (
        <div
          key={idx}
          className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200"
        >
          {section.title ? (
            <h3 className="text-sm font-semibold text-slate-800">
              {section.title}
            </h3>
          ) : null}
          {section.body ? (
            <p className="mt-1 text-sm text-slate-600 whitespace-pre-line">
              {section.body}
            </p>
          ) : null}
          {section.items ? (
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : null}
          {section.callout ? (
            <div className="mt-3 rounded-xl bg-primary-50 px-3 py-2 text-sm text-primary-800">
              {section.callout}
            </div>
          ) : null}
          {section.links ? (
            <div className="mt-3 space-y-1">
              {section.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-primary-600 hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
          {section.image ? (
            <figure className="mt-3 space-y-2 rounded-xl bg-white p-3 ring-1 ring-slate-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={section.image}
                alt={section.caption || section.title || "Illustration"}
                className="w-full rounded-lg object-cover"
              />
              {section.caption ? (
                <figcaption className="text-xs text-slate-500">
                  {section.caption}
                </figcaption>
              ) : null}
            </figure>
          ) : null}
        </div>
      ))}
    </div>
  );
}

