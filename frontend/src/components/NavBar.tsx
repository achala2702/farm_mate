import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useScreenWidth from "@/hooks/useScreenWidth";

interface NavBarProps {
  isOpen: boolean;
}

const navItems = [
  { name: "Home", icon: "", href: "/forum" },
  { name: "Disease Detection", icon: "", href: "/disease-detection" },
  { name: "Yield Prediction", icon: "", href: "/yield-prediction" },
];

const NavBar: React.FC<NavBarProps> = ({ isOpen }) => {
  const screenWidth = useScreenWidth();

  const pathname = usePathname();
  return (
    <aside
      className={`fixed h-screen bg-background px-4 w-72  pt-20 border-r-1 py-8 border-gray-400 ${
        screenWidth < 1280
          ? "transform transition-transform duration-300 ease-in-out"
          : ""
      } ${
        screenWidth >= 1280 || isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <p className="font-semibold mx-5">Navigation</p>
      <nav className="flex mt-2 flex-col gap-2">
        {navItems.map((item) => (
          <Link
            className={`block mx-2 p-2 rounded-xl hover:bg-custom-sidebar-hover ${
              pathname === item.href ? "bg-custom-sidebar-hover" : ""
            }`}
            key={item.name}
            href={item.href}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default NavBar;
