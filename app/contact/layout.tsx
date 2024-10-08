import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | SMDV",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
