"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "aninda2005@gmail.com";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`GuardianNest AI contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-teal-900">
          Name
        </label>
        <input
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-lg border border-teal-900/15 bg-white px-4 py-2.5 text-sm text-teal-950 outline-none focus:border-teal-600"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-teal-900">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-lg border border-teal-900/15 bg-white px-4 py-2.5 text-sm text-teal-950 outline-none focus:border-teal-600"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-teal-900">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 w-full rounded-lg border border-teal-900/15 bg-white px-4 py-2.5 text-sm text-teal-950 outline-none focus:border-teal-600"
          placeholder="How can we help?"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-800"
      >
        Send Message
      </button>
      <p className="text-xs text-teal-900/50">
        This opens your email app with the message pre-filled, addressed to{" "}
        {CONTACT_EMAIL}.
      </p>
    </form>
  );
}
