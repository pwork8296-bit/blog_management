import React from "react";
import LoginPageComponent from "@/app/components/admin/LoginPageComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Login | Windmill Theme",
  description: "Windmill Admin Dashboard Login Page",
};

export default function AdminPage() {
  return <LoginPageComponent />;
}
