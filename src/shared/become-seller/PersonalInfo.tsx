import { Input } from "@/components";
import React from "react";
import { useFormContext } from "react-hook-form";
import { SellerSignup } from "./const";

const PersonalInfo = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <p>Enter your personal information.</p>
      <Input
        placeholder="Enter here"
        label="First name"
        {...register(SellerSignup.FIRSTNAME)}
        error={!!errors[SellerSignup.FIRSTNAME]}
        helperText={errors[SellerSignup.FIRSTNAME]?.message as string}
      />
      <Input
        placeholder="Enter here"
        label="Last name"
        {...register(SellerSignup.LASTNAME)}
        error={!!errors[SellerSignup.LASTNAME]}
        helperText={errors[SellerSignup.LASTNAME]?.message as string}
      />
      <Input
        placeholder="Enter here"
        label="Email"
        {...register(SellerSignup.EMAIL)}
        error={!!errors[SellerSignup.EMAIL]}
        helperText={errors[SellerSignup.EMAIL]?.message as string}
      />
      <Input
        placeholder="Enter here"
        label="Mobile"
        {...register(SellerSignup.MOBINE_NUMBER)}
        error={!!errors[SellerSignup.MOBINE_NUMBER]}
        helperText={errors[SellerSignup.MOBINE_NUMBER]?.message as string}
      />
    </div>
  );
};

export default PersonalInfo;
