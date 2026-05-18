import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ for Logistics Training and Programs",
  description: "Find answers to common questions about logistics training, registrations, certifications, and learning support services.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
