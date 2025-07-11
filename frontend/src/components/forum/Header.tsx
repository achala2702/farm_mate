import React from "react";
import SearchInput from "../SearchInput";
import Button from "../button";
import useScreenWidth from "@/hooks/useScreenWidth";

interface HeaderProps {
  searchFunction: () => void;
}

export default function Header({ searchFunction }: HeaderProps) {
  const screenWidth = useScreenWidth();

  return (
    <div className="bg-primaryGreen text-[#f8fbe7] flex flex-col items-center justify-center py-6 gap-4 rounded-xl">
      <h1 className=" md:text-2xl lg:text-4xl font-bold text-center">
        Welcome to the Farm Mate Community Forum
      </h1>
      <p className="md:text-lg lg:text-xl text-center">
        Connect with fellow farmers, share knowledge, and grow together
      </p>
      <div className="flex items-center gap-2">
        <SearchInput
          width={screenWidth < 640 ? "w-36" : "w-72"}
          className="lg:py-6 lg:px-8 md:h-8 px-2 h-6 md:px-4 lg:h-12 bg-custom-header-search-background"
        />
        <Button
          text="Search"
          onClick={searchFunction}
          className="px-2 h-8 bg-white text-center text-primaryGreen rounded-full md:px-4 lg:h-12 lg:px-6"
        />
      </div>
    </div>
  );
}
