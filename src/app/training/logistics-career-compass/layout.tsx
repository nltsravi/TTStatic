import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logistics Career Guidance and Training Support",
  description: "Get expert career guidance, industry insights, and professional training for successful growth in logistics careers.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
