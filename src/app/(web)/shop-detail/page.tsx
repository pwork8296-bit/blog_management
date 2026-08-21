import type { Metadata } from "next";
import PageHeader from "../../components/web/PageHeader";
import ProductDetail from "../../components/web/ProductDetail";
import DetailSidebar from "../../components/web/DetailSidebar";
import RelatedProducts from "../../components/web/RelatedProducts";

export const metadata: Metadata = {
  title: "Shop Detail – Brocoli | Gardening Tools",
  description:
    "View full details, reviews and related products for fresh organic Brocoli.",
};

export default function ShopDetailPage() {
  return (
    <>
      <PageHeader
        title="Shop Detail"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pages", href: "#" },
          { label: "Shop Detail" },
        ]}
      />

      {/* Single Product Section */}
      <div className="container-fluid py-5 mt-5">
        <div className="container py-5">
          <div className="row g-4 mb-5">
            <ProductDetail />
            <DetailSidebar />
          </div>
          <RelatedProducts />
        </div>
      </div>
    </>
  );
}
