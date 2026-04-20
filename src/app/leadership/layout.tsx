import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership",
  description: "Meet the visionary leadership team behind Tirwin Talent shaping the future of logistics and supply chain professionals.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
