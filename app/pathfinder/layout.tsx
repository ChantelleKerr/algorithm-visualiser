import type { Metadata } from "next";
import "@/app/globals.css";
import { GridProvider } from "@/context/GridProvider";

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
