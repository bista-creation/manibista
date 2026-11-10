import Image from "next/image";
import type { ReactNode } from "react";
import type { SiteImage } from "@/lib/images";
import { cn } from "@/lib/utils";

export function ArticleSection({
  id,
  number,
  title,
  children,
  className,
}: {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("article-section", className)}
      aria-labelledby={`${id}-title`}
    >
      <div className="article-section-head">
        <span className="article-section-number" aria-hidden="true">
          {number}
        </span>
        <h2 id={`${id}-title`} className="article-h2">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

export function ArticleSubhead({ children }: { children: ReactNode }) {
  return <h3 className="article-h3">{children}</h3>;
}

export function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <aside className="article-takeaways" aria-labelledby="key-takeaways-title">
      <p className="eyebrow" id="key-takeaways-title">
        The short version
      </p>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </aside>
  );
}

export function Callout({
  variant = "note",
  title,
  children,
}: {
  variant?: "note" | "warning" | "tip" | "legal" | "example";
  title: string;
  children: ReactNode;
}) {
  return (
    <aside className={cn("article-callout", `is-${variant}`)}>
      <p className="article-callout-label">{title}</p>
      <div className="article-callout-body">{children}</div>
    </aside>
  );
}

export function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="article-checklist">
      {items.map((item) => (
        <li key={item}>
          <span className="article-check" aria-hidden="true">
            <svg viewBox="0 0 16 16" fill="none">
              <path
                d="m3.5 8.5 3 3 6-7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function DataTable({
  caption,
  head,
  rows,
}: {
  caption?: string;
  head: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className="article-table-wrap">
      <table className="article-table">
        {caption ? <caption>{caption}</caption> : null}
        <thead>
          <tr>
            {head.map((cell) => (
              <th key={cell} scope="col">
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) =>
                cellIndex === 0 ? (
                  <th key={cellIndex} scope="row">
                    {cell}
                  </th>
                ) : (
                  <td key={cellIndex}>{cell}</td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function FinanceGrid({
  items,
}: {
  items: Array<{ label: string; value: string; note?: string }>;
}) {
  return (
    <div className="article-finance-grid">
      {items.map((item) => (
        <div className="article-finance-card" key={item.label}>
          <p className="article-finance-value">{item.value}</p>
          <p className="article-finance-label">{item.label}</p>
          {item.note ? (
            <p className="article-finance-note">{item.note}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function StatGrid({
  items,
}: {
  items: Array<{ value: string; label: string; note?: string }>;
}) {
  return (
    <div className="article-stat-grid">
      {items.map((item) => (
        <div className="article-stat" key={item.label}>
          <p className="article-stat-value">{item.value}</p>
          <p className="article-stat-label">{item.label}</p>
          {item.note ? <p className="article-stat-note">{item.note}</p> : null}
        </div>
      ))}
    </div>
  );
}

export function ArticleFigure({
  image,
  caption,
  priority = false,
  sizes = "(max-width: 1024px) 92vw, 760px",
  aspect = "aspect-[16/9]",
}: {
  image: SiteImage;
  caption: string;
  priority?: boolean;
  sizes?: string;
  aspect?: string;
}) {
  return (
    <figure className="article-figure">
      <div className={cn("article-figure-image", aspect)}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export function PullQuote({
  quote,
  attribution,
}: {
  quote: string;
  attribution?: string;
}) {
  return (
    <blockquote className="article-pullquote">
      <p>{quote}</p>
      {attribution ? <cite>{attribution}</cite> : null}
    </blockquote>
  );
}

export function SourceList({
  sources,
}: {
  sources: Array<{
    title: string;
    publisher: string;
    date?: string;
    href: string;
  }>;
}) {
  return (
    <ol className="article-sources">
      {sources.map((source) => (
        <li key={source.href}>
          <a
            href={source.href}
            target="_blank"
            rel="noopener noreferrer"
            className="article-source-link"
          >
            {source.title}
          </a>
          <span className="article-source-meta">
            {source.publisher}
            {source.date ? ` · ${source.date}` : ""}
          </span>
        </li>
      ))}
    </ol>
  );
}

export function SourceLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="article-source-inline"
    >
      {children}
      <svg
        viewBox="0 0 12 12"
        fill="none"
        aria-hidden="true"
        className="article-source-arrow"
      >
        <path
          d="M3 9 9 3M4 3h5v5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
