import type { Metadata } from "next";
import { LegalLayout, LegalSection, LegalList } from "@/components/legal";

export const metadata: Metadata = {
  title: "Terms of Service | GuardianNest AI",
  description: "Terms of Service for GuardianNest AI.",
};

export default function TermsOfServicePage() {
  return (
    <LegalLayout
      title="Terms of Service for GuardianNest AI"
      updated="October 4, 2026"
      intro={
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your access to
          and use of the GuardianNest AI mobile application (the
          &quot;App&quot;), operated by GuardianNest AI (&quot;we,&quot;
          &quot;our,&quot; or &quot;us&quot;). By downloading, accessing, or
          using the App, you agree to be bound by these Terms. If you do not
          agree, please do not use the App.
        </p>
      }
    >
      <LegalSection title="1. Description of Service">
        <p>
          GuardianNest AI is a personal organization app that helps you keep
          track of medication reminders, doctor appointments, baby and pet
          vaccination schedules, and document expiry dates. The App may
          include AI-powered features that provide general assistance and
          reminder suggestions.
        </p>
      </LegalSection>

      <LegalSection title="2. Not Medical Advice">
        <p>
          GuardianNest AI is not a medical device, healthcare provider, or
          emergency service. Information you store or receive through the
          App, including AI-generated content, is for personal organizational
          purposes only and is not intended to be, and should not be relied
          upon as, medical advice, diagnosis, or treatment.
        </p>
        <p>
          Always consult a qualified healthcare professional regarding any
          medical condition, medication, or treatment. In an emergency,
          contact your local emergency services immediately.
        </p>
      </LegalSection>

      <LegalSection title="3. Eligibility and Accounts">
        <p>
          You must be capable of forming a legally binding contract to use
          the App. If you create profiles for family members, children, or
          pets, you confirm that you are their parent, guardian, or otherwise
          authorized to manage information on their behalf.
        </p>
        <p>
          You are responsible for maintaining the confidentiality of any
          account credentials and for all activity that occurs under your
          account.
        </p>
      </LegalSection>

      <LegalSection title="4. Your Responsibilities">
        <p>You agree to:</p>
        <LegalList
          items={[
            "Provide information that is accurate to the best of your knowledge",
            "Use the App only for lawful, personal, non-commercial purposes",
            "Avoid entering unnecessary sensitive information (such as financial details, passwords, or full document numbers) into the App",
            "Keep your device and account access secure",
          ]}
        />
        <p>
          Reminders are provided as a convenience and depend on your device
          settings, notification permissions, connectivity, and correct data
          entry. We are not responsible for missed reminders resulting from
          these factors.
        </p>
      </LegalSection>

      <LegalSection title="5. Acceptable Use">
        <p>You agree not to:</p>
        <LegalList
          items={[
            "Use the App for any unlawful or fraudulent purpose",
            "Attempt to gain unauthorized access to the App, its systems, or other users' data",
            "Reverse engineer, decompile, or disassemble the App except as permitted by law",
            "Interfere with or disrupt the operation of the App or its underlying infrastructure",
            "Use the App to store or transmit information belonging to others without authorization",
          ]}
        />
      </LegalSection>

      <LegalSection title="6. Intellectual Property">
        <p>
          The App, including its design, features, graphics, and content
          (excluding information you enter yourself), is owned by
          GuardianNest AI or its licensors and is protected by applicable
          intellectual property laws. We grant you a limited,
          non-exclusive, non-transferable license to use the App for your
          personal, non-commercial use, subject to these Terms.
        </p>
      </LegalSection>

      <LegalSection title="7. Subscriptions and Purchases">
        <p>
          The App may offer free features as well as optional paid features
          or subscriptions. If paid features are offered, pricing, billing
          terms, and cancellation policies will be disclosed at the time of
          purchase and, where applicable, are also governed by the policies
          of the app store (Apple App Store or Google Play) through which
          the purchase was made.
        </p>
      </LegalSection>

      <LegalSection title="8. Third-Party Services">
        <p>
          The App may rely on third-party services, such as cloud
          infrastructure, analytics, crash reporting, notifications, or AI
          service providers, to operate certain features. We are not
          responsible for the availability or performance of third-party
          services outside of our control.
        </p>
      </LegalSection>

      <LegalSection title="9. Disclaimers">
        <p>
          The App is provided on an &quot;as is&quot; and &quot;as
          available&quot; basis, without warranties of any kind, whether
          express or implied, including but not limited to warranties of
          merchantability, fitness for a particular purpose, and
          non-infringement. We do not warrant that the App will be
          uninterrupted, error-free, or that reminders will always be
          delivered accurately or on time.
        </p>
      </LegalSection>

      <LegalSection title="10. Limitation of Liability">
        <p>
          To the fullest extent permitted by applicable law, GuardianNest AI
          shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages, or any loss of data, health
          outcomes, or missed appointments, vaccinations, medications, or
          document renewals, arising from or related to your use of, or
          inability to use, the App.
        </p>
      </LegalSection>

      <LegalSection title="11. Indemnification">
        <p>
          You agree to indemnify and hold harmless GuardianNest AI from any
          claims, damages, losses, or expenses arising out of your misuse of
          the App or your violation of these Terms.
        </p>
      </LegalSection>

      <LegalSection title="12. Termination">
        <p>
          You may stop using the App at any time. We may suspend or
          terminate your access to the App if we reasonably believe you have
          violated these Terms, or to protect the security, integrity, or
          availability of the App.
        </p>
      </LegalSection>

      <LegalSection title="13. Changes to These Terms">
        <p>
          We may update these Terms from time to time to reflect changes to
          the App, our services, or applicable law. When we make
          significant changes, we may provide an appropriate notice within
          the App or through other reasonable means. The updated Terms will
          include a revised &quot;Last Updated&quot; date, and your continued
          use of the App after changes take effect constitutes acceptance of
          the revised Terms.
        </p>
      </LegalSection>

      <LegalSection title="14. Contact Us">
        <p>
          If you have questions about these Terms, please contact us:
        </p>
        <LegalList
          items={[
            "App Name: GuardianNest AI",
            <>Website: <a className="text-teal-700 underline" href="https://guardiannestai.com">guardiannestai.com</a></>,
            <>Contact Email: <a className="text-teal-700 underline" href="mailto:aninda2005@gmail.com">aninda2005@gmail.com</a></>,
          ]}
        />
        <p className="font-medium text-teal-900">
          GuardianNest AI — Smart Care &amp; Reminders for Your Family
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
