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
      <TopBar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <div className="flex min-h-screen">
        <NavBar isOpen={navbarOpen} />
        <main className="flex-1 flex flex-col gap-6 mx-4 md:mx-14 py-10 mt-14 xl:ml-80 xl:mr-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
