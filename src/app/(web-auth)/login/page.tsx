import React from "react";
import WebUserLoginPageComponent from "@/app/components/web/auth/WebUserLoginPageComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Login | PS Ricca - Online Nursery",
  description: "Sign in to your customer account at PS Ricca to manage orders and checkout fast.",
};

export default function WebUserLoginPage() {
  return <WebUserLoginPageComponent />;
}
