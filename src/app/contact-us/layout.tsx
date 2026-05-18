import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us for Logistics Training Support",
  description: "Connect with Tirwin Talent for logistics training details, career guidance, and professional learning assistance.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
