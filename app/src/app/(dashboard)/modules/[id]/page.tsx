import { notFound } from "next/navigation";
import { getModuleById } from "@/lib/supabase/queries";
import { ContentRenderer } from "@/components/learning/content-renderer";
import { MarkComplete } from "@/components/learning/mark-complete";

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
      <div className="rounded-3xl bg-white/80 p-6 shadow-lg ring-1 ring-slate-200">
        <h1 className="text-2xl font-bold text-slate-900">
          {moduleData?.title}
        </h1>
        <p className="text-sm text-slate-600">{moduleData?.description}</p>
        <div className="mt-3">
          <MarkComplete moduleId={moduleData!.id} />
        </div>
      </div>
      <div className="rounded-3xl bg-white/80 p-6 shadow-lg ring-1 ring-slate-200">
        <ContentRenderer content={moduleData?.content} />
      </div>
    </div>
  );
}

