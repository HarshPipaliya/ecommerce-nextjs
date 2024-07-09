"use client";

import { CookieItemsKeys } from "@/constants/cookies.const";
import { ThemeType } from "@/enums/theme.enum";
import cn from "@/helper/cn";
import { getCookie, setCookie } from "@/helper/cookies";
import React, { ReactNode, useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

interface ThemeWrapperProps {
  children: ReactNode;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>(ThemeType.LIGHT);

  useEffect(() => {
    getCookie(CookieItemsKeys.THEME) === ThemeType.LIGHT &&
      setTheme(ThemeType.DARK);
  }, []);

  const handleToggleTheme = () => {
    setTheme(theme === ThemeType.LIGHT ? ThemeType.DARK : ThemeType.LIGHT);
    setCookie(CookieItemsKeys.THEME, theme);
  };

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
      <button
        className="fixed bottom-5 right-5 w-[50px] h-[50px] text-white rounded-full flex items-center justify-center bg-blue-400"
        onClick={handleToggleTheme}
      >
        {theme === ThemeType.DARK ? (
          <BiMoon fontSize={30} />
        ) : (
          <BiSun fontSize={30} />
        )}
      </button>
    </div>
  );
};

export default ThemeWrapper;
