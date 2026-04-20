import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Tirwin Talent for any inquiries regarding our training programs, masterclasses, or corporate partnerships.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
