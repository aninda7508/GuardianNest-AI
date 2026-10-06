import Image from "next/image";
import Link from "next/link";

const FEATURES = [
  {
    icon: "💊",
    title: "Medication Reminders",
    tagline: "Stay on track with your medicines and daily health routines.",
    items: [
      "Set medicine reminders",
      "Track upcoming and missed doses",
      "Organize medicines in one place",
      "Get timely notifications so you don't forget",
    ],
  },
  {
    icon: "👨‍⚕️",
    title: "Doctor Appointment Reminders",
    tagline: "Keep your medical appointments organized.",
    items: [
      "Add doctor appointments",
      "Set date and time reminders",
      "Keep important appointment details handy",
      "Never miss an important visit",
    ],
  },
  {
    icon: "👶",
    title: "Baby Vaccination Tracker",
    tagline: "Keep your baby's vaccination schedule organized.",
    items: [
      "Create a baby profile",
      "Track vaccination dates",
      "Get upcoming and overdue vaccination reminders",
      "Manage vaccination information in one place",
    ],
  },
  {
    icon: "🐾",
    title: "Pet Vaccination Reminders",
    tagline: "Take better care of your pets.",
    items: [
      "Create pet profiles",
      "Track vaccination schedules",
      "Set vaccination reminders",
      "Keep important pet-care dates organized",
    ],
  },
  {
    icon: "📄",
    title: "Document Expiry Reminders",
    tagline: "Never get caught off guard by an expired document.",
    items: [
      "Add important documents",
      "Set expiry dates",
      "Receive advance expiry reminders",
      "Keep licenses, insurance, passports and other important documents organized",
    ],
  },
  {
    icon: "🤖",
    title: "AI-Powered Care",
    tagline:
      "Designed to make everyday care easier with smart assistance and helpful reminders.",
    items: [
      "Smart reminders for medicine, vaccinations & appointments",
      "Helpful nudges for document renewals",
      "Built to help you remember what matters",
    ],
  },
];

const EVERYDAY_CARE = [
  "Remember medicines",
  "Track doctor appointments",
  "Manage baby vaccinations",
  "Manage pet vaccinations",
  "Track document expiry dates",
  "Stay organized with timely reminders",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-50 via-[#f7faf9] to-[#f7faf9]">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
          <span className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-1.5 text-sm font-medium text-teal-800">
            <Image
              src="/logo.png"
              alt="GuardianNest AI logo"
              width={20}
              height={20}
              className="rounded-md"
            />
            GuardianNest AI
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-teal-950 md:text-6xl">
            Smart Care &amp; Reminders for Your Family
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-teal-900/70">
            Never miss an important medicine, doctor appointment, vaccination,
            or document expiry again.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base text-teal-900/60">
            GuardianNest AI helps you organize everyday care for yourself and
            your loved ones in one simple, easy-to-use app — from medication
            reminders to baby and pet vaccinations, keeping important dates
            right at your fingertips.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#download"
              className="rounded-xl bg-teal-700 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-700/20 transition-colors hover:bg-teal-800"
            >
              Download the App
            </a>
            <Link
              href="/contact"
              className="rounded-xl border border-teal-700/20 px-7 py-3 text-sm font-semibold text-teal-800 transition-colors hover:bg-teal-50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-teal-950">
            Everything your family&apos;s care needs, in one app
          </h2>
          <p className="mt-4 text-teal-900/60">
            Whether it&apos;s your medicine, your child&apos;s vaccination, your
            pet&apos;s next vaccine, a doctor&apos;s appointment, or an important
            document renewal, GuardianNest AI helps you remember what matters.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-teal-900/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="text-3xl">{feature.icon}</div>
              <h3 className="mt-4 text-lg font-bold text-teal-950">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-teal-900/60">{feature.tagline}</p>
              <ul className="mt-4 space-y-2">
                {feature.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-teal-900/70"
                  >
                    <span className="text-teal-600">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* One app for everyday care */}
      <section className="bg-teal-900 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <span className="text-3xl">👨‍👩‍👧‍👦</span>
              <h2 className="mt-4 text-3xl font-bold">
                One App for Everyday Care
              </h2>
              <p className="mt-4 text-teal-100/80">
                Manage important reminders for yourself and your family from
                one convenient place. GuardianNest AI helps you:
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {EVERYDAY_CARE.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm font-medium"
                >
                  <span className="text-teal-300">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="download" className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-teal-950">
          Your family&apos;s important moments deserve to be remembered.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-teal-900/60">
          Download GuardianNest AI and make everyday care simpler, smarter,
          and more organized.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <span className="rounded-xl border border-teal-900/10 bg-white px-6 py-3 text-sm font-semibold text-teal-900/50">
            📱 iOS — Coming Soon
          </span>
          <span className="rounded-xl border border-teal-900/10 bg-white px-6 py-3 text-sm font-semibold text-teal-900/50">
            🤖 Android — Coming Soon
          </span>
        </div>
      </section>
    </>
  );
}
