import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operational Logistics Fast-Track Certificate | Tirwin Talent",
  description: "Join Tirwin Talent's intensive 4-module fast-track boot camp for immediate operational readiness in international freight forwarding with free placement support.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

