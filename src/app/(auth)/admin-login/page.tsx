import React from "react";
import LoginPageComponent from "@/app/components/admin/LoginPageComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Windmill Admin Dashboard",
  description: "Login page for Windmill Admin Dashboard",
};

export default function AdminLoginPage() {
  return <LoginPageComponent />;
}
