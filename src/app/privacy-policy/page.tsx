import type { Metadata } from "next";
import {
  LegalLayout,
  LegalSection,
  LegalSubsection,
  LegalList,
} from "@/components/legal";

export const metadata: Metadata = {
  title: "Privacy Policy | GuardianNest AI",
  description: "Privacy Policy for GuardianNest AI.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy for GuardianNest AI"
      updated="October 4, 2026"
      intro={
        <p>
          GuardianNest AI (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
          respects your privacy and is committed to protecting your personal
          information. This Privacy Policy explains how GuardianNest AI
          collects, uses, stores, and protects information when you use the
          GuardianNest AI mobile application (the &quot;App&quot;). By using
          GuardianNest AI, you agree to the practices described in this
          Privacy Policy.
        </p>
      }
    >
      <LegalSection title="1. Information We May Collect">
        <p>
          Depending on the features you use, GuardianNest AI may process the
          following information:
        </p>

        <LegalSubsection title="A. Profile Information">
          <p>You may provide information such as:</p>
          <LegalList
            items={[
              "Name or profile name",
              "Family member name",
              "Date of birth",
              "Relationship information",
              "Profile preferences",
            ]}
          />
        </LegalSubsection>

        <LegalSubsection title="B. Medication Information">
          <p>If you use the medication reminder feature, you may enter:</p>
          <LegalList
            items={[
              "Medicine name",
              "Dosage information",
              "Medicine schedule",
              "Reminder times",
              "Start and end dates",
              "Notes related to the medication",
            ]}
          />
        </LegalSubsection>

        <LegalSubsection title="C. Doctor Appointment Information">
          <p>You may provide:</p>
          <LegalList
            items={[
              "Doctor or healthcare provider name",
              "Appointment date and time",
              "Appointment notes",
              "Location or other appointment details, if entered by you",
            ]}
          />
        </LegalSubsection>

        <LegalSubsection title="D. Baby Vaccination Information">
          <p>If you use the baby vaccination feature, you may provide:</p>
          <LegalList
            items={[
              "Baby's name",
              "Date of birth",
              "Country or vaccination schedule",
              "Vaccination information",
              "Vaccination dates",
              "Reminder information",
            ]}
          />
        </LegalSubsection>

        <LegalSubsection title="E. Pet Information">
          <p>If you use the pet-care feature, you may provide:</p>
          <LegalList
            items={[
              "Pet name",
              "Pet type",
              "Date of birth or age",
              "Vaccination information",
              "Vaccination dates",
              "Reminder information",
            ]}
          />
        </LegalSubsection>

        <LegalSubsection title="F. Document Information">
          <p>If you use document expiry reminders, you may provide:</p>
          <LegalList
            items={[
              "Document type",
              "Document name",
              "Expiry date",
              "Renewal/reminder dates",
              "Notes",
            ]}
          />
          <p>
            You should avoid entering unnecessary sensitive information,
            such as document numbers, passwords, financial information, or
            other information that is not required for the reminder feature.
          </p>
        </LegalSubsection>

        <LegalSubsection title="G. Device and Technical Information">
          <p>
            We may automatically receive limited technical information
            required to operate and improve the App, such as:
          </p>
          <LegalList
            items={[
              "Device type",
              "Operating system version",
              "App version",
              "Crash and diagnostic information",
              "Notification-related technical information",
            ]}
          />
          <p>
            The exact information collected may depend on the services and
            SDKs used in the App.
          </p>
        </LegalSubsection>
      </LegalSection>

      <LegalSection title="2. How We Use Information">
        <p>We may use information to:</p>
        <LegalList
          items={[
            "Provide medication reminders",
            "Provide doctor appointment reminders",
            "Provide baby vaccination reminders",
            "Provide pet vaccination reminders",
            "Provide document expiry reminders",
            "Maintain profiles and reminder schedules",
            "Send notifications requested by you",
            "Improve App functionality and reliability",
            "Detect and resolve technical problems",
            "Prevent abuse or unauthorized use",
            "Provide customer support",
          ]}
        />
        <p>
          We do not use your information to provide medical diagnosis or
          treatment.
        </p>
      </LegalSection>

      <LegalSection title="3. Health-Related Information">
        <p>
          GuardianNest AI may allow users to store information related to
          medications, appointments, and vaccinations. This information is
          provided by the user for personal organization and reminder
          purposes.
        </p>
        <p>
          GuardianNest AI is not a medical device, healthcare provider, or
          emergency service. The App does not replace professional medical
          advice, diagnosis, or treatment. For medical emergencies, users
          should contact an appropriate healthcare professional or emergency
          service.
        </p>
      </LegalSection>

      <LegalSection title="4. Notifications">
        <p>GuardianNest AI may send notifications for:</p>
        <LegalList
          items={[
            "Medication schedules",
            "Doctor appointments",
            "Vaccination dates",
            "Document expiry dates",
            "Other reminders created by the user",
          ]}
        />
        <p>
          You can manage notification permissions through your device
          settings.
        </p>
      </LegalSection>

      <LegalSection title="5. Data Storage and Security">
        <p>
          We take reasonable technical and organizational measures to
          protect information from unauthorized access, alteration,
          disclosure, or destruction. Depending on the App&apos;s
          implementation, information may be stored locally on your device
          and/or on secure servers. No method of electronic storage or
          transmission is completely secure, and therefore we cannot
          guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection title="6. Data Sharing">
        <p>We do not sell your personal information.</p>
        <p>We may share information only when reasonably necessary to:</p>
        <LegalList
          items={[
            "Provide App functionality",
            "Operate technical infrastructure",
            "Provide analytics or crash reporting, where enabled",
            "Comply with applicable laws or legal processes",
            "Protect the rights, safety, and security of users and the App",
          ]}
        />
        <p>
          Third-party service providers, where used, may process information
          only as necessary to provide their services and are expected to
          handle information in accordance with applicable privacy
          requirements.
        </p>
      </LegalSection>

      <LegalSection title="7. Third-Party Services">
        <p>
          GuardianNest AI may use third-party services such as analytics,
          crash reporting, cloud infrastructure, authentication,
          notification services, or AI services. The specific third-party
          services used by the App may change over time. Where third-party
          services process personal information, their processing may also
          be governed by their respective privacy policies.
        </p>
      </LegalSection>

      <LegalSection title="8. AI Features">
        <p>
          If GuardianNest AI provides AI-powered features, information
          submitted to those features may be processed by the technology or
          service provider supporting the AI functionality. Users should
          avoid submitting unnecessary sensitive personal information to AI
          features. AI-generated information is provided for general
          assistance and organization only and should not be considered
          medical advice, diagnosis, or treatment.
        </p>
      </LegalSection>

      <LegalSection title="9. Children's Privacy">
        <p>
          GuardianNest AI may allow a parent or guardian to create profiles
          for children for purposes such as vaccination reminders. The App
          is intended to be used by parents, guardians, or other responsible
          users. We do not knowingly seek to collect personal information
          directly from children for independent use of the App.
        </p>
        <p>
          Parents or guardians are responsible for the information they
          choose to enter into the App. If you believe that a child has
          provided personal information directly to us without appropriate
          authorization, please contact us so that we can review and take
          appropriate action.
        </p>
      </LegalSection>

      <LegalSection title="10. Data Retention">
        <p>
          We retain information only for as long as reasonably necessary to
          provide the requested functionality, comply with legal
          obligations, resolve disputes, and enforce agreements. Users may
          delete information from the App where deletion functionality is
          available. If account deletion is supported, users may request
          deletion of their account and associated personal information
          through the available App or support process.
        </p>
      </LegalSection>

      <LegalSection title="11. Your Privacy Choices">
        <p>
          Depending on the functionality available in the App, you may be
          able to:
        </p>
        <LegalList
          items={[
            "View information stored in your profile",
            "Edit reminder information",
            "Delete medication records",
            "Delete appointment records",
            "Delete vaccination records",
            "Delete pet profiles",
            "Delete document records",
            "Disable notifications",
            "Request deletion of your account or personal information",
          ]}
        />
        <p>You may also contact us regarding privacy-related requests.</p>
      </LegalSection>

      <LegalSection title="12. Permissions">
        <p>
          GuardianNest AI may request certain device permissions when
          required for specific features. Examples may include:
        </p>
        <LegalList
          items={[
            "Notification permission – for reminders",
            "Camera permission – if document, prescription, or vaccination scanning features are enabled",
            "Photo/media permission – if users choose to attach or scan images",
            "Microphone permission – if voice input features are enabled",
          ]}
        />
        <p>
          Permissions are requested only when needed for the corresponding
          functionality. You can manage permissions through your device
          settings.
        </p>
      </LegalSection>

      <LegalSection title="13. Changes to This Privacy Policy">
        <p>
          We may update this Privacy Policy from time to time to reflect
          changes to the App, services, technology, or applicable laws. When
          we make significant changes, we may provide an appropriate notice
          within the App or through other reasonable means. The updated
          Privacy Policy will include a revised &quot;Last Updated&quot;
          date.
        </p>
      </LegalSection>

      <LegalSection title="14. Contact Us">
        <p>
          If you have questions, concerns, or requests regarding this
          Privacy Policy or your personal information, please contact us:
        </p>
        <LegalList
          items={[
            "App Name: GuardianNest AI",
            <>Website: <a className="text-teal-700 underline" href="https://guardiannestai.com">guardiannestai.com</a></>,
            <>Privacy Contact Email: <a className="text-teal-700 underline" href="mailto:aninda2005@gmail.com">aninda2005@gmail.com</a></>,
          ]}
        />
        <p className="font-medium text-teal-900">
          GuardianNest AI — Smart Care &amp; Reminders for Your Family
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
