'use client'

import { Header } from "@/widgets/Header";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen mx-auto max-w-mobile bg-background">
      <Header />
      <main className="w-full pt-24">{children}</main>
    </div>
  );
}
