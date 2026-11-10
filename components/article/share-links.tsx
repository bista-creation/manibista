"use client";

import { useState } from "react";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function ShareLinks({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="article-share" aria-label="Share this guide">
      <span className="article-share-label">Share</span>

      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        title="Share on X"
      >
        <svg {...iconProps}>
          <path d="M4 4l16 16M20 4 4 20" />
        </svg>
      </a>

      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        title="Share on LinkedIn"
      >
        <svg {...iconProps}>
          <path d="M6 9v9M6 6v.01M11 18v-5a3 3 0 0 1 6 0v5" />
        </svg>
      </a>

      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        title="Share on Facebook"
      >
        <svg {...iconProps}>
          <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v5h4v-5h3l1-4h-4V8Z" />
        </svg>
      </a>

      <a
        href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on WhatsApp"
        title="Share on WhatsApp"
      >
        <svg {...iconProps}>
          <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 21l2.2-5.2A8.5 8.5 0 1 1 21 11.5Z" />
          <path d="M8.6 8.7c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 1.8c.1.2.1.4 0 .6l-.5.7c-.1.2-.2.3 0 .6.4.7 1.2 1.5 2.1 1.9.3.1.4.1.6-.1l.8-.9c.2-.2.4-.2.6-.1l1.7.8c.2.1.3.2.3.4 0 .5-.2 1.2-.6 1.5-.4.4-1 .6-1.7.5-1.3-.2-2.9-.9-4.2-2.2-1.3-1.3-2-2.9-2.2-4.2-.1-.7.1-1.3.5-1.7Z" />
        </svg>
      </a>

      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Link copied" : "Copy link"}
        title={copied ? "Link copied" : "Copy link"}
        className={copied ? "is-copied" : undefined}
      >
        {copied ? (
          <svg {...iconProps}>
            <path d="m5 12 4 4L19 6" />
          </svg>
        ) : (
          <svg {...iconProps}>
            <path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1" />
            <path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1" />
          </svg>
        )}
      </button>
    </div>
  );
}
