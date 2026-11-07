import { cn } from "@/lib/utils";

export function Faq({
  items,
  className,
}: {
  items: Array<{ question: string; answer: string }>;
  className?: string;
}) {
  return (
    <div className={cn("w-full", className)}>
      {items.map((item) => (
        <details className="faq-item" key={item.question}>
          <summary>
            <span>{item.question}</span>
            <span className="faq-icon" aria-hidden="true" />
          </summary>
          <div className="faq-answer">{item.answer}</div>
        </details>
      ))}
    </div>
  );
}
