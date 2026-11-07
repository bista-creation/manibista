export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((item, index) => (
          <span className="marquee-item" key={`${item}-${index}`}>
            <span>{item}</span>
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
