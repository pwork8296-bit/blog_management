import React from "react";
import WebUserRegisterPageComponent from "@/app/components/web/auth/WebUserRegisterPageComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account | PS Ricca - Online Nursery",
  description: "Register a new customer account at PS Ricca for easy plant shopping and tracking.",
};

export default function WebUserRegisterPage() {
  return <WebUserRegisterPageComponent />;
}
