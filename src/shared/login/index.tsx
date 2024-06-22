"use client";

import { Button, Input } from "@/components";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { ILoginInputs, LoginInputs, loginSchema } from "./const";
import Link from "next/link";

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILoginInputs>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (values: ILoginInputs) => {
    console.log({ values });
  };

  return (
    <div className="w-[100vw] h-[100vh] relative flex items-center justify-center">
      <form
        className="border p-4 rounded flex gap-3 flex-col w-[350px]"
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
          Don't have an account?
          <Link href={"/signup"} className="text-blue-600">
            Signup
          </Link>
        </p>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default LoginForm;
