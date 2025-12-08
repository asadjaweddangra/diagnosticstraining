export function MnemonicCard({
  title,
  content,
  hint,
}: {
  title?: string;
  content: string;
  hint?: string;
}) {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-primary-50 via-white to-primary-50 p-4 ring-1 ring-primary-100">
      {title ? <p className="text-xs font-semibold uppercase text-primary-700">{title}</p> : null}
      <p className="mt-1 text-base font-semibold text-slate-900">{content}</p>
      {hint ? <p className="mt-1 text-xs text-slate-600">{hint}</p> : null}
    </div>
  );
}

