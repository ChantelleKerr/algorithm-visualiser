import type { Metadata } from "next";
import "@/app/globals.css";
import { TableProvider } from "@/context/DPTableProvider";
export const metadata: Metadata = {
  title: "Dynamic Programming",
  description: "Visualise DP Algorithms",
};

export default function PathFinderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <TableProvider>{children}</TableProvider>;
}
