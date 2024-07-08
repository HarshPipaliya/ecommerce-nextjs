import { Button, Input } from "@/components";
import React from "react";
import { StepTypes } from "@/shared/seller-signup/utils";
import { useFormContext } from "react-hook-form";
import { SellerSignupInputs } from "@/shared/seller-signup/const";

const Step1: React.FC<StepTypes> = ({ handleNextClick }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <h1 className="text-xl font-semibold">Personal Information</h1>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex gap-2 justify-between items-start">
          <div className="flex-1">
            <Input
              label="Firtname"
              fullWidth
              placeholder="Enter here"
              {...register(SellerSignupInputs.FIRSTNAME)}
              error={!!errors[SellerSignupInputs.FIRSTNAME]}
              helperText={
                errors[SellerSignupInputs.FIRSTNAME]?.message as string
              }
            />
          </div>
          <div className="flex-1">
            <Input
              label="Lastname"
              fullWidth
              placeholder="Enter here"
              {...register(SellerSignupInputs.LASTNAME)}
              error={!!errors[SellerSignupInputs.LASTNAME]}
              helperText={
                errors[SellerSignupInputs.LASTNAME]?.message as string
              }
            />
          </div>
        </div>
        <Input
          label="Mobile No."
          fullWidth
          placeholder="Enter here"
          {...register(SellerSignupInputs.MOBILE)}
          error={!!errors[SellerSignupInputs.MOBILE]}
          helperText={errors[SellerSignupInputs.MOBILE]?.message as string}
        />
        <Input
          label="Email"
          fullWidth
          placeholder="Enter here"
          {...register(SellerSignupInputs.EMAIL)}
          error={!!errors[SellerSignupInputs.EMAIL]}
          helperText={errors[SellerSignupInputs.EMAIL]?.message as string}
        />
        <div className="flex items-center gap-2">
          <Button fullWidth onClick={handleNextClick}>
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default Step1;
