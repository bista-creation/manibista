"use client";

import { useRef, useState, type FormEvent } from "react";
import { mailtoLink, siteConfig, whatsappLink } from "@/lib/site";
import { ArrowUpRight, WhatsAppIcon } from "./icons";

export function ReservationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [requestText, setRequestText] = useState("");
  const [status, setStatus] = useState("");

  function buildRequest() {
    const form = formRef.current;
    if (!form) {
      return "";
    }

    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) ?? "").trim();

    const lines = [
      `Name: ${value("name")}`,
      `Email: ${value("email")}`,
      `Phone / WhatsApp: ${value("phone") || "Not provided"}`,
      `Experience: ${value("experience")}`,
      `Preferred date: ${value("date")}`,
      `Guests: ${value("guests")}`,
      `Location: ${value("location")}`,
      `Dietary notes: ${value("dietary") || "None"}`,
      `Occasion / notes: ${value("message") || "None"}`,
    ];

    return `Hello Chef Mani, I'd like to request a private dining experience.\n\n${lines.join("\n")}`;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = buildRequest();
    setRequestText(text);
    setStatus(
      "WhatsApp is opening with your request. If it doesn't open, use the email link below.",
    );
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-9">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Full name"
            required
          />
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="field">
          <label htmlFor="phone">Phone / WhatsApp</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="+977"
          />
        </div>

        <div className="field">
          <label htmlFor="experience">Experience</label>
          <select id="experience" name="experience" required defaultValue="">
            <option value="" disabled>
              Select an experience
            </option>
            <option value="Chef's table">The chef&apos;s table</option>
            <option value="Private dining & celebration">
              Private dining &amp; celebration
            </option>
            <option value="Cooking session">Cooking session</option>
            <option value="Something else">Something else</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="date">Preferred date</label>
          <input id="date" name="date" type="date" required />
        </div>

        <div className="field">
          <label htmlFor="guests">Guests</label>
          <input
            id="guests"
            name="guests"
            type="number"
            min={1}
            max={100}
            defaultValue={4}
            required
          />
        </div>

        <div className="field sm:col-span-2">
          <label htmlFor="location">Location</label>
          <select id="location" name="location" required defaultValue="">
            <option value="" disabled>
              Where is the experience?
            </option>
            <option value="Kathmandu">Kathmandu</option>
            <option value="Elsewhere in Nepal">Elsewhere in Nepal</option>
            <option value="India">India</option>
            <option value="Other">Other / not sure yet</option>
          </select>
        </div>

        <div className="field sm:col-span-2">
          <label htmlFor="dietary">Dietary notes</label>
          <input
            id="dietary"
            name="dietary"
            type="text"
            placeholder="Allergies, preferences, or anything the chef should know"
          />
        </div>

        <div className="field sm:col-span-2">
          <label htmlFor="message">The occasion</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell the chef about the evening you have in mind."
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button type="submit" className="btn btn-gold">
          <WhatsAppIcon className="h-4 w-4" />
          Send request via WhatsApp
          <ArrowUpRight className="arrow h-3.5 w-3.5" />
        </button>
        <a
          href={mailtoLink("Private dining request", requestText)}
          className="btn btn-ghost"
        >
          Email the chef
        </a>
      </div>

      <p
        aria-live="polite"
        className="min-h-5 font-mono text-[0.55rem] uppercase tracking-[0.18em] text-gold/80"
      >
        {status}
      </p>

      <p className="max-w-xl text-xs leading-relaxed text-cream/40">
        This opens WhatsApp with your details. The chef will confirm
        availability personally. You can also call{" "}
        <a
          href={`tel:${siteConfig.phone}`}
          className="text-cream/65 underline decoration-gold/30 underline-offset-4 transition-colors hover:text-gold"
        >
          {siteConfig.phoneDisplay}
        </a>{" "}
        or email{" "}
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-cream/65 underline decoration-gold/30 underline-offset-4 transition-colors hover:text-gold"
        >
          {siteConfig.email}
        </a>
        .
      </p>
    </form>
  );
}
