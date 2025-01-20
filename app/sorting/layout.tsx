import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { SortProvider } from "@/context/SortProvider";
import SortController from "@/components/ControlPanel/SortController";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sorting Algorithms",
  description: "Visualise Sorting Algorithms",
};

export default function SortingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SortProvider>
      <SortController>{children}</SortController>
    </SortProvider>
  );
}
