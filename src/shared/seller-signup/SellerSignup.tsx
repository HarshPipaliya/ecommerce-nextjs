"use client";

import React from "react";
import { useForm } from "react-hook-form";
import {
  ISellerSignupForm,
  sellerSignupSchema,
  SellerSignup as SellerSignupEnum,
} from "./const";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { Button, Input } from "@/components";
import { BiRightArrow } from "react-icons/bi";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const SellerSignup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISellerSignupForm>({
    resolver: yupResolver(sellerSignupSchema),
  });
  const onSubmit = (values: ISellerSignupForm) => {
    console.log({ values });
  };
  return (
    <div className="flex p-4 gap-[300px] justify-between">
      <div className="flex justify-between flex-1">
        <div>
          <Image src="/logo.png" alt="logo" width={30} height={30} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-[80%]">
          <div className="flex w-full flex-col gap-4">
            <div className="flex gap-2 items-start">
              <Input
                {...register(SellerSignupEnum.FIRSTNAME)}
                label="Firstname"
                containerClassname="flex-1"
                fullWidth
                placeholder="Enter here"
                error={!!errors[SellerSignupEnum.FIRSTNAME]}
                helperText={errors[SellerSignupEnum.FIRSTNAME]?.message}
              />
              <Input
                {...register(SellerSignupEnum.LASTNAME)}
                label="Lastname"
                fullWidth
                containerClassname="flex-1"
                placeholder="Enter here"
                error={!!errors[SellerSignupEnum.LASTNAME]}
                helperText={errors[SellerSignupEnum.LASTNAME]?.message}
              />
            </div>
            <Input
              {...register(SellerSignupEnum.MOBINE_NUMBER)}
              label="Mobile"
              fullWidth
              containerClassname="flex-1"
              placeholder="Enter here"
              error={!!errors[SellerSignupEnum.MOBINE_NUMBER]}
              helperText={errors[SellerSignupEnum.MOBINE_NUMBER]?.message}
            />
            <Input
              {...register(SellerSignupEnum.EMAIL)}
              label="Email"
              fullWidth
              containerClassname="flex-1"
              placeholder="Enter here"
              error={!!errors[SellerSignupEnum.EMAIL]}
              helperText={errors[SellerSignupEnum.EMAIL]?.message}
            />
            <Input
              {...register(SellerSignupEnum.PASSWORD)}
              label="Password"
              fullWidth
              containerClassname="flex-1"
              placeholder="Enter here"
              error={!!errors[SellerSignupEnum.PASSWORD]}
              helperText={errors[SellerSignupEnum.PASSWORD]?.message}
            />
            <p className="text-gray-600 text-sm">
              By continuing, I agree to your{" "}
              <span className="text-blue-700 font-semibold">
                Term of Use & Privacy Policy
              </span>
            </p>
          </div>
          <Button className="mt-4">
            Register & Continue
            <FaArrowRightLong fontSize={16} />
          </Button>
        </form>
      </div>
      <div className="w-[300px]">
        <div className="border border-neutral-400 p-4 rounded-xl dark:bg-gray-700">
          <h2 className="text-lg dark:text-white">Welcome Seller</h2>
          <p className="text-xs dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            rerum iusto expedita enim nam ea nesciunt perspiciatis itaque labore
            voluptatibus distinctio totam fuga ipsa id, eveniet sequi animi,
            facere aperiam?
          </p>
        </div>
      </div>
    </div>
  );
};

export default SellerSignup;
