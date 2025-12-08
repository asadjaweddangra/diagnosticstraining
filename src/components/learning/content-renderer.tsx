import { ContentSection } from "@/types";
import { AlertBox } from "./alert-box";
import { StepList } from "./step-list";
import { ComparisonTable } from "./comparison-table";
import { MnemonicCard } from "./mnemonic-card";
import { ScriptBlock } from "./script-block";
import { DecisionTree } from "./decision-tree";
import { Checklist } from "./checklist";
import { AnatomyViewer } from "./anatomy-viewer";

export function ContentRenderer({ content }: { content: any }) {
  if (!content) return null;
  const sections: ContentSection[] = content.sections ?? [];

  return (
    <div className="space-y-4">
      {sections.map((section, idx) => (
        <div
          key={idx}
          className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200"
        >
          {(!section.type || section.type === "list") && (
            <div>
              {section.title ? (
                <h3 className="text-sm font-semibold text-slate-800">{section.title}</h3>
              ) : null}
              {section.body ? (
                <p className="mt-1 whitespace-pre-line text-sm text-slate-600">
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
              {"image" in section && section.image ? (
                <figure className="mt-3 space-y-2 rounded-xl bg-white p-3 ring-1 ring-slate-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={section.image}
                    alt={section.caption || section.title || "Illustration"}
                    className="w-full rounded-lg object-cover"
                  />
                  {section.caption ? (
                    <figcaption className="text-xs text-slate-500">{section.caption}</figcaption>
                  ) : null}
                </figure>
              ) : null}
            </div>
          )}

          {section.type === "alert" ? (
            <AlertBox title={section.title} items={section.items} variant={section.variant} />
          ) : null}

          {section.type === "steps" ? (
            <StepList title={section.title} steps={section.steps} footnote={section.footnote} />
          ) : null}

          {section.type === "comparison" ? (
            <ComparisonTable
              title={section.title}
              rows={section.rows}
              leftLabel={section.leftLabel}
              rightLabel={section.rightLabel}
              body={"body" in section ? section.body : undefined}
            />
          ) : null}

          {section.type === "flow" ? (
            <DecisionTree title={section.title} nodes={section.nodes} />
          ) : null}

          {section.type === "mnemonic" ? (
            <MnemonicCard title={section.title} content={section.content} hint={section.hint} />
          ) : null}

          {section.type === "script" ? (
            <ScriptBlock title={section.title} script={section.script} />
          ) : null}

          {section.type === "imageGallery" ? (
            <div className="space-y-2">
              {section.title ? (
                <h3 className="text-sm font-semibold text-slate-800">{section.title}</h3>
              ) : null}
              <div className="grid gap-3 sm:grid-cols-2">
                {section.images.map((img) => (
                  <figure
                    key={img.src}
                    className="rounded-xl bg-white p-3 ring-1 ring-slate-200"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.caption || section.title || "Illustration"}
                      className="w-full rounded-lg object-cover"
                    />
                    {img.caption ? (
                      <figcaption className="text-xs text-slate-500">{img.caption}</figcaption>
                    ) : null}
                  </figure>
                ))}
              </div>
            </div>
          ) : null}

          {section.type === "checklist" ? (
            <Checklist title={section.title} items={section.items} />
          ) : null}

          {section.type === "anatomy" ? (
            <AnatomyViewer
              title={section.title}
              image={section.image}
              caption={section.caption}
              markers={section.markers}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}

