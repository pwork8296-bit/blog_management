import type { Metadata } from "next";
import PageHeader from "../../components/web/PageHeader";
import ShopSection from "../../components/web/ShopSection";

export const metadata: Metadata = {
  title: "Shop – Fresh Fruits & Vegetables | Gardening Tools",
  description:
    "Browse our full selection of fresh organic fruits and vegetables. Filter by category, price, and more.",
};

export default function ShopPage() {
  return (
    <>
      <PageHeader
        title="Shop"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pages", href: "#" },
          { label: "Shop" },
        ]}
      />
      <ShopSection />
    </>
  );
}
