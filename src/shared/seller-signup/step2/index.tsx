import { Button, Input, Select } from "@/components";
import React from "react";
import { BusinessTypes, StepTypes } from "@/shared/seller-signup/utils";
import { useFormContext } from "react-hook-form";
import { SellerSignupInputs } from "@/shared/seller-signup/const";

const Step2: React.FC<StepTypes> = ({ handleNextClick, handlePrevClick }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <h1 className="text-xl font-semibold">Business Information</h1>
      <div className="flex flex-col gap-2 mt-4">
        <Input
          fullWidth
          label="Business Name"
          placeholder="Enter here"
          {...register(SellerSignupInputs.BUSINESS_NAME)}
          error={!!errors[SellerSignupInputs.BUSINESS_NAME]}
          helperText={
            errors[SellerSignupInputs.BUSINESS_NAME]?.message as string
          }
        />
        <Select
          placeholder="Select bussiness type"
          options={BusinessTypes}
          fullWidth
          label="Business Type"
          {...register(SellerSignupInputs.BUSINESS_TYPE)}
          error={!!errors[SellerSignupInputs.BUSINESS_TYPE]}
          helperText={
            errors[SellerSignupInputs.BUSINESS_TYPE]?.message as string
          }
        />
        <div className="flex items-center gap-2 mt-3">
          <Button fullWidth onClick={handlePrevClick} variant="outlined">
            Previous
          </Button>
          <Button fullWidth onClick={handleNextClick}>
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default Step2;
