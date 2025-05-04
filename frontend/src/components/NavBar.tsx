import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavBarProps {
  isOpen: boolean;
}

const navItems = [
  { name: "Home", icon: "", href: "/forum" },
  { name: "Disease Detection", icon: "", href: "/disease-detection" },
  { name: "Yield Prediction", icon: "", href: "/yield-prediction" },
];

const NavBar: React.FC<NavBarProps> = ({ isOpen }) => {
  const pathname = usePathname();
  return (
    <aside className="h-screen px-4 w-72 border-r-1 py-8 border-gray-400">
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
