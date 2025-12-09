import { notFound } from "next/navigation";
import { getModuleById } from "@/lib/supabase/queries";
import { ContentRenderer } from "@/components/learning/content-renderer";
import { MarkComplete } from "@/components/learning/mark-complete";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

type Props = {
  params: { id: string };
};

export default async function ModuleDetailPage({ params }: Props) {
  const moduleData = await getModuleById(params.id);
  if (!moduleData) {
    notFound();
  }

  return (
    <div className="space-y-4">
      <div className="glass-panel p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-ink/70 ring-1 ring-white/10">
              <BookOpen size={14} />
              {moduleData?.modality?.toUpperCase() ?? "COMMON"}
            </p>
            <h1 className="text-2xl font-bold text-ink">{moduleData?.title}</h1>
            <p className="text-sm text-ink/70">{moduleData?.description}</p>
            <div className="flex flex-wrap gap-2">
              <MarkComplete moduleId={moduleData!.id} />
              {moduleData?.modality ? (
                <Link
                  href={`/${moduleData.modality}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary-500/10 px-3 py-2 text-xs font-semibold text-primary-100 ring-1 ring-primary-500/30 transition hover:-translate-y-0.5"
                >
                  Go to {moduleData.modality} track <ArrowRight size={14} />
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="glass-panel p-6">
        <ContentRenderer content={moduleData?.content ?? undefined} />
      </div>
    </div>
  );
}

