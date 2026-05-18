import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Tirwin – Logistics Talent Experts",
  description: "Tirwin is a leading logistics and supply chain talent platform offering training, innovation, and career solutions for industry professionals.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
