"use client";
import { FC } from "react";
import { BiSearch } from "react-icons/bi";

interface SearchProps {}

const Search: FC<SearchProps> = ({}) => {
  return (
    <div className="border-[1px] w-full py-2 rounded-full shadow-sm transition cursor-pointer  md:w-auto">
      <div className="flex items-center justify-between flex-row ">
        <div className="text-sm font-semibold px-6  ">Anywhere</div>
        <div className="border-x-[1px] flex-1 font-semibold text-center hidden sm:block text-sm px-6 ">
          Any week
        </div>
        <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3 ">
          <div className="hidden sm:block "> Add guests</div>
          <div className="p-2 bg-rose-500 rounded-full text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
