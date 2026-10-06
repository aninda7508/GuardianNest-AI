import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-teal-900/5 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-2 text-lg font-bold text-teal-900">
              <Image
                src="/logo.png"
                alt="GuardianNest AI logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              GuardianNest AI
            </div>
            <p className="mt-2 max-w-xs text-sm text-teal-900/60">
              Smart Care &amp; Reminders for Your Family.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <span className="font-semibold text-teal-900">Company</span>
            <Link href="/" className="text-teal-900/60 hover:text-teal-700">
              Home
            </Link>
            <Link href="/contact" className="text-teal-900/60 hover:text-teal-700">
              Contact Us
            </Link>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <span className="font-semibold text-teal-900">Legal</span>
            <Link href="/privacy-policy" className="text-teal-900/60 hover:text-teal-700">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-teal-900/60 hover:text-teal-700">
              Terms of Service
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-teal-900/5 pt-6 text-xs text-teal-900/50">
          © {year} GuardianNest AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
