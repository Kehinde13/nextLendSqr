import type { Metadata } from "next";
import "./globals.css";
import { work_sans } from "./ui/fonts";
import { cn } from "@/app/lib/utils";

export const metadata: Metadata = {
  title: {
    template: '%s | lendSqr Dashboard',
    default: 'lendSqr Dashboard',
  },
  description: 'LendSqr dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          "bg-background font-sans antialiased",
          work_sans.className
        )}>{children}</body>
    </html>
  );
}
