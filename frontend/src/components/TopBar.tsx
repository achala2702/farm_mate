import React from "react";
import SearchInput from "./SearchInput";
import { Icon } from "@iconify/react";
import useScreenWidth from "@/hooks/useScreenWidth";

type TopBarProps = {
  navbarOpen: boolean;
  setNavbarOpen: (value: boolean) => void;
};

export default function TopBar({ navbarOpen, setNavbarOpen }: TopBarProps) {
  const screenWidth = useScreenWidth();
  return (
    <div className="flex px-14 items-center w-full justify-between py-2 border-b-1 border-gray-400 bg-background z-10 fixed">
      <div
        onClick={() => setNavbarOpen(!navbarOpen)}
        className="absolute left-4 xl:hidden flex justify-center items-center transition-opacity duration-300 ease-in-out"
      >
        <Icon
          icon={
            navbarOpen
              ? "line-md:menu-to-close-transition"
              : "qlementine-icons:menu-burger-16"
          }
          width="24"
          height="24"
        />
      </div>
      <h1 className="text-primaryGreen text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
        FarmMate
      </h1>
      <SearchInput width="w-64" className={`bg-custom-sidebar-hover ${screenWidth< 640? "hidden": ""}`} />
      <div className="flex gap-4">
        <p>d</p>
        <p>d</p>
        <p>d</p>
      </div>
    </div>
  );
}
