"use client";
import { Navbar } from "@components/header/navbar";
import { parseCookies, setCookie } from "nookies";
import React, { ReactNode, useEffect, useState } from "react";

interface ThemeWrapperProps {
  children: ReactNode;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const cookies = parseCookies();
    cookies.theme === "light" && setTheme("dark");
  }, []);

  return (
    <div className={theme}>
      <Navbar
        toggleTheme={() => {
          setTheme(theme === "light" ? "dark" : "light");
          setCookie(null, "theme", theme);
        }}
        theme={theme}
      />
      {children}
    </div>
  );
};

export default ThemeWrapper;
