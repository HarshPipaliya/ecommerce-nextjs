"use client";

import { LoadingPage } from "@/components/loaders";
import { CookieItemsKeys } from "@/constants/cookies.const";
import { routes } from "@/constants/routes.const";
import { getCookie } from "@/helper";
import useSeller from "@/hooks/use-seller";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";
import toast from "react-hot-toast";

const SellerLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const { seller, setSeller } = useSeller();

  useEffect(() => {
    setIsLoading(true);
    const sellerToken = getCookie(CookieItemsKeys.SELLER_TOKEN);
    if (!sellerToken) {
      router.push(routes.auth.login);
      setIsLoading(false);
      setAuthenticated(false);
    }
    me(sellerToken);
  }, []);

  const me = async (token: string) => {
    try {
      const res = await axios.get("/api/auth/me", {
        headers: {
          Authorization: token,
        },
      });
      setSeller(res?.data?.data);
      setIsLoading(false);
      setAuthenticated(true);
      console.log({ res });
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
      router.push(routes.auth.login);
    }
  };

  return (
    <>
      {isLoading ? <LoadingPage /> : <>{isAuthenticated ? children : null}</>}
    </>
  );
};

export default SellerLayout;
