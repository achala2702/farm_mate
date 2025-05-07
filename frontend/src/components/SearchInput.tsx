import React from "react";

interface SearchInputProps {
    className?: string;
    width:string;

}

const SearchInput: React.FC<SearchInputProps>=({className, width})=>{
    return(
        <div className={`md:w-${width}`}>
        <input
          type="search"
          placeholder="Search discussions..."
          className={`${className} w-full h-8 px-2 rounded-full focus-visible:ring-primaryGreen focus-visible:ring-1 focus-visible:outline-none border-none`}
        />
      </div>
    );
}

export default SearchInput;