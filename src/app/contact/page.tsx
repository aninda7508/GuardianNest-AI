import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | GuardianNest AI",
  description: "Get in touch with the GuardianNest AI team.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-teal-950 md:text-4xl">
          Contact Us
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-teal-900/60">
          Questions, feedback, or privacy requests? We&apos;d love to hear
          from you.
        </p>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div className="rounded-2xl border border-teal-900/5 bg-white p-6 shadow-sm md:p-8">
          <ContactForm />
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-2xl bg-teal-900 p-6 text-white md:p-8">
            <Image
              src="/logo.png"
              alt="GuardianNest AI logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <h2 className="mt-4 text-lg font-bold">GuardianNest AI</h2>
            <p className="mt-2 text-sm text-teal-100/80">
              Smart Care &amp; Reminders for Your Family.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <div>
                <div className="text-teal-100/60">Website</div>
                <a
                  href="https://guardiannestai.com"
                  className="font-medium text-white underline"
                >
                  guardiannestai.com
                </a>
              </div>
              <div>
                <div className="text-teal-100/60">Email</div>
                <a
                  href="mailto:aninda2005@gmail.com"
                  className="font-medium text-white underline"
                >
                  aninda2005@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-teal-900/5 bg-white p-6 text-sm text-teal-900/60">
            For medical emergencies, please contact a qualified healthcare
            professional or your local emergency service directly.
            GuardianNest AI is not a medical device or emergency service.
          </div>
        </div>
      </div>
    </section>
  );
}
