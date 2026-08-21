import type { Metadata } from "next";
import PageHeader from "../../components/web/PageHeader";
import ContactSection from "../../components/web/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us | Gardening Tools",
  description:
    "Get in touch with us for inquiries, feedback, or support regarding our fresh organic products.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pages", href: "#" },
          { label: "Contact" },
        ]}
      />
      <ContactSection />
    </>
  );
}
