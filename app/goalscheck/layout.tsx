import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GoalsCheck - FocusAI",
  description: "Track and achieve your goals",
};

export default function GoalsCheckLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
} 