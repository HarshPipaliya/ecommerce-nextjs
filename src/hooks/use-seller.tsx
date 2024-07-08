"use client";

import { ISellerContext, SellerContext } from "@/context/seller-provider";
import { useContext } from "react";

const useSeller = () => {
  return useContext(SellerContext) as ISellerContext;
};

export default useSeller;
