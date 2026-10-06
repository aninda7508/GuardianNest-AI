import type { ReactNode } from "react";

export function LegalLayout({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated?: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-extrabold tracking-tight text-teal-950 md:text-4xl">
        {title}
      </h1>
      {updated && (
        <p className="mt-2 text-sm text-teal-900/50">Last Updated: {updated}</p>
      )}
      {intro && <div className="mt-6 space-y-4 text-teal-900/70">{intro}</div>}
      <div className="mt-10 space-y-10">{children}</div>
    </section>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xl font-bold text-teal-950">{title}</h2>
      <div className="mt-3 space-y-3 text-teal-900/70">{children}</div>
    </div>
  );
}

export function LegalSubsection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h3 className="font-semibold text-teal-900">{title}</h3>
      <div className="mt-2 space-y-2 text-teal-900/70">{children}</div>
    </div>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2">
          <span className="mt-1 text-teal-600">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
