import type { Metadata } from "next";
import "@/app/globals.css";
import { SortProvider } from "@/context/SortProvider";
import SortController from "@/components/ControlPanel/SortController";

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
