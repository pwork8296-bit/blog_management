import type { Metadata } from "next";
import DashboardClient from "@/app/components/admin/DashboardClient";

export const metadata: Metadata = {
  title: "Dashboard | Windmill Admin",
  description: "Windmill Admin Dashboard main view",
};

export default function AdminDashboardPage() {
  return <DashboardClient />;
}
