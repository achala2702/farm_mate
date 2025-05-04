import React from "react";
import SearchInput from "../SearchInput";
import Button from "../button";

interface HeaderProps {
    searchFunction: ()=>void;
}

export default function Header({searchFunction}:HeaderProps) {
  return (
    <div className="bg-primaryGreen text-[#f8fbe7] flex flex-col items-center justify-center py-6 gap-4 rounded-xl">
      <h1 className="text-4xl font-bold">
        Welcome to the Farm Mate Community Forum
      </h1>
      <p className="text-xl">
        Connect with fellow farmers, share knowledge, and grow together
      </p>
      <div className="flex items-center gap-2">
      <SearchInput width="72" className="py-6 px-8 h-12 bg-custom-header-search-background" />
      <Button text="Search" onClick={searchFunction} className="bg-white text-center text-primaryGreen rounded-full h-12 px-6"/>
      </div>
    </div>
  );
}
