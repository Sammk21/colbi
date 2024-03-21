"use client";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [headerColor, setHeaderColor] = useState("white");
  const [isLoading, setIsLoading] = useState(false);
  const [staticNavbar, setStaticNavbar] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        showSearch,
        setShowSearch,
        headerColor,
        setHeaderColor,
        isLoading,
        setIsLoading,
        staticNavbar,
        setStaticNavbar,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
