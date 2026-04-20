import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Tirwin Talent and our mission to elevate the global supply chain, logistics, and cargo industry standard.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
