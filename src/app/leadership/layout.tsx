import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Our Logistics Leadership Team",
  description: "Explore the experienced leadership team driving innovation and talent development in logistics and supply chain training.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
