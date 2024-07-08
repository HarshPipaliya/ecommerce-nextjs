"use client";

import { Button, Input } from "@/components";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { ISingupInputs, SignupInputs, singupSchema } from "./const";
import Link from "next/link";

const SignupForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ISingupInputs>({
    resolver: yupResolver(singupSchema),
  });

  const onSubmit = (values: ISingupInputs) => {
    console.log({ values });
  };

  return (
    <div className="w-[100vw] h-[100vh] relative flex items-center justify-center">
      <form
        className="border p-4 rounded flex gap-3 flex-col w-[350px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center text-lg">Singup</h1>
        <Input
          placeholder="Firstname"
          fullWidth
          {...register(SignupInputs.FIRSTNAME)}
          error={!!errors[SignupInputs.FIRSTNAME]}
          helperText={errors[SignupInputs.FIRSTNAME]?.message}
        />
        <Input
          placeholder="Lastname"
          fullWidth
          {...register(SignupInputs.LASTNAME)}
          error={!!errors[SignupInputs.LASTNAME]}
          helperText={errors[SignupInputs.LASTNAME]?.message}
        />
        <Input
          placeholder="Mobile Number"
          fullWidth
          {...register(SignupInputs.MOBILE_NUMBER)}
          error={!!errors[SignupInputs.MOBILE_NUMBER]}
          helperText={errors[SignupInputs.MOBILE_NUMBER]?.message}
        />
        <Input
          placeholder="Email"
          fullWidth
          {...register(SignupInputs.EMAIL)}
          error={!!errors[SignupInputs.EMAIL]}
          helperText={errors[SignupInputs.EMAIL]?.message}
        />
        <Input
          placeholder="Password"
          fullWidth
          {...register(SignupInputs.PASSWORD)}
          error={!!errors[SignupInputs.PASSWORD]}
          helperText={errors[SignupInputs.PASSWORD]?.message}
        />
        <p className="text-xs">
          Already have an account?{" "}
          <Link href={"/login"} className="text-blue-600">
            Login
          </Link>
        </p>
        <Button type="submit">Create Account</Button>
      </form>
    </div>
  );
};

export default SignupForm;
