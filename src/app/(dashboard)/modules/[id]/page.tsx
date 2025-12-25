import { notFound } from "next/navigation";
import { getModuleById } from "@/lib/supabase/queries";
import { ContentRenderer } from "@/components/learning/content-renderer";
import { MarkComplete } from "@/components/learning/mark-complete";
import Link from "next/link";
import { ArrowRight, ArrowLeft, BookOpen } from "lucide-react";
import { getModules } from "@/lib/supabase/queries";
import { BookmarkButton } from "@/components/learning/bookmark-button";

type Props = {
  params: { id: string };
};

export default async function ModuleDetailPage({ params }: Props) {
  const moduleData = await getModuleById(params.id);
  const modules = await getModules();
  if (!moduleData) {
    notFound();
  }

  const siblings = modules
    .filter((m) => m.modality === moduleData.modality)
    .sort((a, b) => (a.order_index ?? 0) - (b.order_index ?? 0));
  const idx = siblings.findIndex((m) => m.id === moduleData.id);
  const prev = idx > 0 ? siblings[idx - 1] : null;
  const next = idx >= 0 && idx < siblings.length - 1 ? siblings[idx + 1] : null;

  return (
    <div className="space-y-4">
      <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="inline-flex items-center gap-2 rounded-full bg-gray-100 border border-gray-200 px-3 py-1 text-xs uppercase tracking-wide text-gray-700">
              <BookOpen size={14} />
              {moduleData?.modality?.toUpperCase() ?? "COMMON"}
            </p>
            <h1 className="text-2xl font-bold text-gray-900">{moduleData?.title}</h1>
            <p className="text-sm text-gray-600">{moduleData?.description}</p>
            <div className="flex flex-wrap gap-2">
              <MarkComplete moduleId={moduleData!.id} />
              <BookmarkButton item={{ title: moduleData.title, href: `/modules/${moduleData.id}`, track: moduleData.modality ?? "common" }} />
              {moduleData?.modality ? (
                <Link
                  href={`/${moduleData.modality}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary-500 px-3 py-2 text-xs font-semibold text-white hover:bg-primary-600 transition"
                >
                  Go to {moduleData.modality} track <ArrowRight size={14} />
                </Link>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col gap-2 text-xs font-semibold text-gray-600">
            {prev ? (
              <Link
                href={`/modules/${prev.id}`}
                className="inline-flex items-center gap-1 rounded-lg bg-gray-100 border border-gray-200 px-3 py-2 hover:bg-gray-200 transition"
              >
                <ArrowLeft size={14} /> Prev: {prev.title}
              </Link>
            ) : null}
            {next ? (
              <Link
                href={`/modules/${next.id}`}
                className="inline-flex items-center gap-1 rounded-lg bg-primary-500 px-3 py-2 text-white hover:bg-primary-600 transition"
              >
                Next: {next.title} <ArrowRight size={14} />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-6">
        <ContentRenderer content={moduleData?.content ?? undefined} />
      </div>
    </div>
  );
}

