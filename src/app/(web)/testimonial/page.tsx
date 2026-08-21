import type { Metadata } from "next";
import PageHeader from "../../components/web/PageHeader";
import Testimonials from "../../components/web/Testimonials";

export const metadata: Metadata = {
  title: "Testimonial – Client Reviews | Gardening Tools",
  description:
    "Read what our clients have to say about our fresh organic products and service.",
};

export default function TestimonialPage() {
  return (
    <>
      <PageHeader
        title="Testimonial"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pages", href: "#" },
          { label: "Testimonial" },
        ]}
      />
      <Testimonials />
    </>
  );
}
