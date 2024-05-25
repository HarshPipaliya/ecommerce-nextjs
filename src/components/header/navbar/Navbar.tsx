import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

interface NavbarProps {
  toggleTheme: () => void;
  theme: string;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, theme }) => {
  return (
    <button onClick={toggleTheme} className="p-1 cursor-pointer rounded-md">
      <span className="text-xl">
        {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
      </span>
    </button>
  );
};

export default Navbar;
