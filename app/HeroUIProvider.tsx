import * as React from "react";
import { HeroUIProvider } from "@heroui/react";
import { ReactNode } from "react";  // Import ReactNode

// Tentukan tipe children sebagai ReactNode
export default function Provider({ children }: { children: ReactNode }) {
  return (
    <HeroUIProvider>
      {children}
    </HeroUIProvider>
  );
}