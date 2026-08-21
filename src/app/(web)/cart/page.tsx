import type { Metadata } from "next";
import PageHeader from "../../components/web/PageHeader";
import CartTable from "../../components/web/CartTable";
import CartSummary from "../../components/web/CartSummary";

export const metadata: Metadata = {
  title: "Cart – Your Shopping Cart | Gardening Tools",
  description:
    "Review the items in your shopping cart, update quantities, apply coupons and proceed to checkout.",
};

export default function CartPage() {
  return (
    <>
      <PageHeader
        title="Cart"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pages", href: "#" },
          { label: "Cart" },
        ]}
      />

      {/* Cart Section */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <CartTable />
          <CartSummary />
        </div>
      </div>
    </>
  );
}
