"use client";

import { useState } from "react";
import SplashScreen from "@/components/SplashScreen"; // Adjust path if needed

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* We pass the required onComplete prop here.
         When SplashScreen finishes, it calls this function, 
         which sets isLoading to false, removing the splash screen.
      */}
      {isLoading && <SplashScreen onComplete={() => setIsLoading(false)} />}
      
      {children}
    </>
  );
}