"use client";
import { Context } from "@/stateManagers/context/Context";
import { useContext, useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

const SearchModal = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setisOpen] = useState(false);
  const { showSearch, setShowSearch } = useContext(Context);

  useEffect(() => {
    if (showSearch) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showSearch]);

  const handleSearch = () => {
    // Implement your search functionality here
    console.log("Searching for:", searchTerm);
  };

  return showSearch ? (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md transition-opacity duration-300 ease-in">
        <label className="relative block shadow-sm">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for anything..."
            type="text"
            name="search"
          />
        </label>
        <button
          className="text-black mx-3 p-1.5 bg-white border-sm rounded-md shadow-sm group"
          onClick={() => {
            setShowSearch(false);
          }}
        >
          <RxCross2 className="group-hover:rotate-180 group-hover:text-red-600 transition" />
        </button>
      </div>
    </>
  ) : null;
};

export default SearchModal;
