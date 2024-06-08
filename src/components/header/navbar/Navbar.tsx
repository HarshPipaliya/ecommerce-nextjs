import Image from "next/image";
import React from "react";
import { Button } from "@/components";
import { CiLogin, CiShop, CiShoppingCart } from "react-icons/ci";
import Link from "next/link";
import { Routes } from "@/enums/routes.enum";

// interface NavbarProps {
//   toggleTheme: () => void;
//   theme: string;
// }

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-blue-700 py-2">
      <div>
        <Image
          src={
            "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
          }
          width={150}
          height={100}
          alt="Logo"
          className="invert"
        />
      </div>
      <div className="flex items-center gap-1">
        <Link href={Routes.BECOME_SELLER}>
          <Button color="info">
            <CiShop fontSize={24} />
            Become a Seller
          </Button>
        </Link>
        <Link href={Routes.CART}>
          <Button color="info">
            <CiShoppingCart fontSize={24} />
            Cart
          </Button>
        </Link>
        <Link href={Routes.SIGNIN}>
          <Button color="info">
            <CiLogin fontSize={24} />
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
