import React from "react";
import ThemeScript from "@/app/components/admin/ThemeScript";
import type { Metadata } from "next";
import "@/app/admin.css";
import { AuthProvider } from "@/app/context/AuthContext";
import ProtectedRoute from "../context/ProtectedRoute";

export const metadata: Metadata = {
  title: "Admin Dashboard | Windmill Theme",
  description: "Next.js Admin Dashboard with Windmill layout and themes",
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ProtectedRoute>
        {children}
      </ProtectedRoute>
    </AuthProvider>
  );
}
