import React from "react";
import SearchInput from "./SearchInput";

export default function TopBar() {
  return (
    <div className="flex px-14 items-center w-full justify-between py-2 border-b-1 border-gray-400">
      <h1 className="text-primaryGreen text-4xl font-bold">FarmMate</h1>
      <SearchInput width="64" className="bg-custom-sidebar-hover" />
      <div className="flex gap-4">
        <p>d</p>
        <p>d</p>
        <p>d</p>
      </div>
    </div>
  );
}
