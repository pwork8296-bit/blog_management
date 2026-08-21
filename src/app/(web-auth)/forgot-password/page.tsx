import React from "react";
import WebUserForgotPasswordComponent from "@/app/components/web/auth/WebUserForgotPasswordComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password | PS Ricca - Online Nursery",
  description: "Reset your customer password for your PS Ricca account.",
};

export default function WebUserForgotPasswordPage() {
  return <WebUserForgotPasswordComponent />;
}
