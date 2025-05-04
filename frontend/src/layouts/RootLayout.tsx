"use client";

import NavBar from "@/components/NavBar";
import TopBar from "@/components/TopBar";
import React, { useState } from "react";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="w-full">
      <TopBar/>
    <div className="flex min-h-screen">
      <NavBar isOpen={navbarOpen} />
      <main className="flex-1 mx-14 py-6">{children}</main>
    </div>
    </div>
  );
};

export default RootLayout;
