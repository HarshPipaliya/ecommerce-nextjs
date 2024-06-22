import { Button, Input } from "@/components";
import React from "react";
import { StepTypes } from "@/shared/seller-signup/utils";
import { SellerSignupInputs } from "@/shared/seller-signup/const";
import { useFormContext } from "react-hook-form";

const Step3: React.FC<StepTypes> = ({ currentStep, handlePrevClick }) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <h1 className="text-xl font-semibold">Password & Security</h1>
      <div className="flex flex-col gap-4 mt-4">
        <Input
          fullWidth
          label="Password"
          placeholder="Enter here"
          {...register(SellerSignupInputs.PASSWORD)}
          error={!!errors[SellerSignupInputs.PASSWORD]}
          helperText={errors[SellerSignupInputs.PASSWORD]?.message as string}
        />
        <Input
          fullWidth
          label="Confirm Password"
          placeholder="Enter here"
          {...register(SellerSignupInputs.PASSWORD)}
          error={!!errors[SellerSignupInputs.PASSWORD]}
          helperText={errors[SellerSignupInputs.PASSWORD]?.message as string}
        />

        <div className="flex items-center gap-2 mt-3">
          <Button fullWidth onClick={handlePrevClick} variant="outlined">
            Previous
          </Button>
          <Button fullWidth type="submit">
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default Step3;
