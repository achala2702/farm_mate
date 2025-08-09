"use client";

import React from "react";
import SearchInput from "./SearchInput";
import { Icon } from "@iconify/react";
import useScreenWidth from "@/hooks/useScreenWidth";
import { useTheme } from "next-themes";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/redux/store";
import Button from "./button";
import { useRouter } from "next/navigation";
import { clearLoginData } from "@/redux/slices/AuthenticationSlice";

type TopBarProps = {
  navbarOpen: boolean;
  setNavbarOpen: (value: boolean) => void;
};

export default function TopBar({ navbarOpen, setNavbarOpen }: TopBarProps) {
  const screenWidth = useScreenWidth();
  const { theme, setTheme } = useTheme();
  const user = useSelector((state: RootState) => state.userAuthentication.data);
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();

  const handleClick = async () => {
    if (user) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (res.ok) {
        dispatch(clearLoginData());
      } else {
        alert("Unknown Error occured!");
      }
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="flex pl-14 pr-4 md:px-14 items-center w-full justify-between py-2 border-b-1 border-gray-400 bg-background z-10 fixed">
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
      <SearchInput
        width="w-64"
        className={`bg-custom-sidebar-hover ${
          screenWidth < 640 ? "hidden" : ""
        }`}
      />
      <div className="flex gap-2 md:gap-4">
        <button
          className="cursor-pointer"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Icon
            icon={theme === "light" ? "solar:moon-linear" : "hugeicons:sun-03"}
            width="24"
            height="24"
          />
        </button>
        {user && (
          <div className="flex gap-1 items-center">
            <p>Welcome, {user?.firstName}</p>
          </div>
        )}
        <Button
          onClick={handleClick}
          className="bg-primaryGreen px-2 py-1 rounded-md whitespace-nowrap"
          text={`${user ? "log out" : "log in"}`}
        />
      </div>
    </div>
  );
}
