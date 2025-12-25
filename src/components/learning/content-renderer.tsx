import { ContentSection } from "@/types";
import { AlertBox } from "./alert-box";
import { StepList } from "./step-list";
import { ComparisonTable } from "./comparison-table";
import { MnemonicCard } from "./mnemonic-card";
import { ScriptBlock } from "./script-block";
import { DecisionTree } from "./decision-tree";
import { Checklist } from "./checklist";
import { AnatomyViewer } from "./anatomy-viewer";
import { ImageGallery } from "./image-gallery";
import { AnnotatedImage } from "./annotated-image";
import { ConceptDiagram } from "./concept-diagram";
import { ComparisonSlider } from "../training/comparison-slider";
import Image from "next/image";

export function ContentRenderer({
  content,
  section,
}: {
  content?: { sections?: ContentSection[] };
  section?: ContentSection;
}) {
  const sections: ContentSection[] = section ? [section] : content?.sections ?? [];

  return (
    <div className="space-y-4">
      {sections.map((section, idx) => (
        <div key={idx} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
          {(!section.type || section.type === "list") && (
            <div>
              {section.title ? <h3 className="text-sm font-semibold text-ink">{section.title}</h3> : null}
              {section.body ? <p className="mt-1 whitespace-pre-line text-sm text-ink/80">{section.body}</p> : null}
              {section.items ? (
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink/80">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {section.callout ? (
                <div className="mt-3 rounded-xl bg-primary-500/10 px-3 py-2 text-sm text-primary-100">{section.callout}</div>
              ) : null}
              {section.links ? (
                <div className="mt-3 space-y-1">
                  {section.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-primary-200 hover:underline"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
              {"image" in section && section.image ? (
                <figure className="mt-3 space-y-2 rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                  <div className="relative h-48 w-full overflow-hidden rounded-lg">
                    <Image
                      src={section.image}
                      alt={section.caption || section.title || "Illustration"}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                  </div>
                  {section.caption ? <figcaption className="text-xs text-ink/60">{section.caption}</figcaption> : null}
                </figure>
              ) : null}
            </div>
          )}

          {section.type === "alert" ? <AlertBox title={section.title} items={section.items} variant={section.variant} /> : null}

          {section.type === "steps" ? <StepList title={section.title} steps={section.steps} footnote={section.footnote} /> : null}

          {section.type === "comparison" ? (
            <ComparisonTable
              title={section.title}
              rows={section.rows}
              leftLabel={section.leftLabel}
              rightLabel={section.rightLabel}
              body={"body" in section ? section.body : undefined}
            />
          ) : null}

          {section.type === "flow" ? <DecisionTree title={section.title} nodes={section.nodes} /> : null}

          {section.type === "mnemonic" ? <MnemonicCard title={section.title} content={section.content} hint={section.hint} /> : null}

          {section.type === "script" ? <ScriptBlock title={section.title} script={section.script} /> : null}

          {section.type === "imageGallery" ? <ImageGallery section={section} /> : null}

          {section.type === "checklist" ? <Checklist title={section.title} items={section.items} /> : null}

          {section.type === "anatomy" ? (
            <AnatomyViewer title={section.title} image={section.image} caption={section.caption} markers={section.markers} />
          ) : null}

          {section.type === "annotatedImage" ? (
            <AnnotatedImage title={section.title} src={section.src} alt={section.alt} caption={section.caption} annotations={section.annotations} />
          ) : null}

          {section.type === "conceptDiagram" ? <ConceptDiagram section={section} /> : null}

          {section.type === "comparisonSlider" ? (
            <div className="space-y-2">
              {section.title ? <h3 className="text-sm font-semibold text-ink">{section.title}</h3> : null}
              <ComparisonSlider good={section.good} bad={section.bad} />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
