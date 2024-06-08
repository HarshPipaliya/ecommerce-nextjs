import { Input } from "@/components";
import React from "react";
import { useFormContext } from "react-hook-form";
import { SellerSignup } from "./const";

const AdditionInfo = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <p>Enter additional information.</p>
      <Input
        placeholder="Enter here"
        label="CITY"
        {...register(SellerSignup.CITY)}
        error={!!errors[SellerSignup.CITY]}
        helperText={errors[SellerSignup.CITY]?.message as string}
      />
      <Input
        placeholder="Enter here"
        label="STATE"
        {...register(SellerSignup.STATE)}
        error={!!errors[SellerSignup.STATE]}
        helperText={errors[SellerSignup.STATE]?.message as string}
      />
      <Input
        placeholder="Enter here"
        label="ZIP"
        {...register(SellerSignup.ZIP)}
        error={!!errors[SellerSignup.ZIP]}
        helperText={errors[SellerSignup.ZIP]?.message as string}
      />
      <Input
        placeholder="Enter here"
        label="COUNTRY"
        {...register(SellerSignup.COUNTRY)}
        error={!!errors[SellerSignup.COUNTRY]}
        helperText={errors[SellerSignup.COUNTRY]?.message as string}
      />
    </div>
  );
};

export default AdditionInfo;
