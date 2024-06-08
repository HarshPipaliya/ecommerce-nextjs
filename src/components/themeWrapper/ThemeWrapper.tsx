"use client";

import { Navbar } from "@/components/header/navbar";
import { ThemeType } from "@/enums/theme.enum";
import cn from "@/helper/cn";
import { parseCookies, setCookie } from "nookies";
import React, { ReactNode, useEffect, useState } from "react";

interface ThemeWrapperProps {
  children: ReactNode;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>(ThemeType.LIGHT);

  useEffect(() => {
    const cookies = parseCookies();
    cookies.theme === ThemeType.LIGHT && setTheme(ThemeType.DARK);
  }, []);

  return (
    <div
      className={cn(
        theme,
        theme === "dark" ? "bg-[#191a1c]" : "",
        "w-full h-full overflow-x-hidden overflow-y-auto"
      )}
    >
      {/* <Navbar
        toggleTheme={() => {
          setTheme(
            theme === ThemeType.LIGHT ? ThemeType.DARK : ThemeType.LIGHT
          );
          setCookie(null, "theme", theme);
        }}
        theme={theme}
      /> */}
      {children}
    </div>
  );
};

export default ThemeWrapper;
