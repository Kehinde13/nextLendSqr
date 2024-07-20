import type { Metadata } from "next";
import "./globals.css";
import { work_sans } from "./ui/fonts";

export const metadata: Metadata = {
  title: {
    template: '%s | lendSqr Dashboard',
    default: 'lendSqr Dashboard',
  },
  description: 'LendSqr dashboard that shows the data of lendSqr customers',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={work_sans.className}>{children}</body>
    </html>
  );
}
