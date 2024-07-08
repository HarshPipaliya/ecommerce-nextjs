"use client";

import { Button, Input } from "@/components";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ILoginInputs, LoginInputs, loginSchema } from "./const";
import Link from "next/link";
import axios, { AxiosError, AxiosResponse } from "axios";
import { ApiResponse, IUser } from "@/types";
import { roles } from "@/constants/globals";
import { useRouter } from "next/navigation";
import { routes } from "@/constants/routes.const";
import toast from "react-hot-toast";
import { setCookie } from "@/helper";
import { CookieItemsKeys } from "@/constants/cookies.const";

const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILoginInputs>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (values: ILoginInputs) => {
    setLoading(true);
    axios
      .post("/api/login", {
        email: values?.[LoginInputs.USERNAME],
        password: values?.[LoginInputs.PASSWORD],
      })
      .then((res: AxiosResponse<ApiResponse<IUser>>) => {
        const { data, message } = res?.data;
        setLoading(false);
        toast.success(message);
        if (data?.role === roles.SELLER) {
          setCookie(CookieItemsKeys.SELLER_TOKEN, data?.token);
          return router.push(routes.seller.dashboard);
        }
        if (data?.role === roles.CONSUMER) {
          setCookie(CookieItemsKeys.CONSUMER_TOKEN, data?.token);
          return router.push("/");
        }
      })
      .catch((error: AxiosError<ApiResponse<null>>) => {
        setLoading(false);
        const message =
          error?.response?.data?.message ?? "Something went wrong!";
        toast.error(message);
      });
  };

  return (
    <div className="w-[100vw] h-[100vh] relative flex justify-center p-5">
      <form
        className="border p-4 rounded flex gap-3 flex-col w-[350px] h-fit"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center text-lg">Login</h1>
        <Input
          placeholder="Email or Username"
          fullWidth
          {...register(LoginInputs.USERNAME)}
          error={!!errors[LoginInputs.USERNAME]}
          helperText={errors[LoginInputs.USERNAME]?.message}
        />
        <Input
          placeholder="Password"
          fullWidth
          {...register(LoginInputs.PASSWORD)}
          error={!!errors[LoginInputs.PASSWORD]}
          helperText={errors[LoginInputs.PASSWORD]?.message}
        />
        <p className="text-xs">
          Dont have an account?
          <Link href={"/signup"} className="text-blue-600">
            Signup
          </Link>
        </p>
        <Button type="submit" loading={loading}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
