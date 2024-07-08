"use client";

import { IUser } from "@/types";
import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

interface IProps extends PropsWithChildren {}

export interface ISellerContext {
  seller: IUser | null;
  setSeller: Dispatch<SetStateAction<IUser | null>>;
}

export const SellerContext = React.createContext<ISellerContext | null>(null);

const SellerProvider: React.FC<IProps> = ({ children }) => {
  const [seller, setSeller] = useState<IUser | null>(null);

  return (
    <SellerContext.Provider
      value={{
        seller,
        setSeller,
      }}
    >
      {children}
    </SellerContext.Provider>
  );
};

export default SellerProvider;
