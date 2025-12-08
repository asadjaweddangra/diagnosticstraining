type Section = {
  title?: string;
  body?: string;
  items?: string[];
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
        </div>
      ))}
    </div>
  );
}

