import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { GridProvider } from "@/context/GridProvider";
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
  title: "Pathfinder Algorithms",
  description: "Visualise Search Algorithms",
};

export default function PathFinderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <GridProvider>{children}</GridProvider>;
}
