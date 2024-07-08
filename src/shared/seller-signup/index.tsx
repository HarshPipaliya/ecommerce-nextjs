"use client";

import React, { useMemo, useState } from "react";
import StepsIndicator from "@/shared/seller-signup/steps-indicator";
import Step1 from "@/shared/seller-signup/step1";
import Step2 from "@/shared/seller-signup/step2";
import Step3 from "@/shared/seller-signup/step3";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ISellerSignupInputs,
  SellerSignupInputs,
  sellerSignupSchema,
} from "@/shared/seller-signup/const";
import axios from "axios";

const SellerSignupForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const currentSchema: any = sellerSignupSchema[currentStep - 1];
  const methods = useForm<ISellerSignupInputs>({
    resolver: yupResolver(currentSchema),
    mode: "onChange",
  });

  const stepProps = useMemo(() => {
    return {
      currentStep,
      handleNextClick: async () => {
        const isValid = await methods.trigger();
        if (isValid) {
          setCurrentStep((prev) => prev + 1);
        }
      },
      handlePrevClick: () => setCurrentStep((prev) => prev - 1),
    };
  }, [currentStep, setCurrentStep, methods]);

  const onSubmit = async (values: ISellerSignupInputs) => {
    const res = await axios.post("/api/signup", {
      firstName: values?.[SellerSignupInputs.FIRSTNAME],
      lastName: values?.[SellerSignupInputs.LASTNAME],
      phoneNumber: values?.[SellerSignupInputs.MOBILE],
      email: values?.[SellerSignupInputs.EMAIL],
      businessName: values?.[SellerSignupInputs.BUSINESS_NAME],
      businessType: values?.[SellerSignupInputs.BUSINESS_TYPE],
      role: "Seller",
      password: values?.[SellerSignupInputs.PASSWORD],
    });
    console.log({ res });
  };

  return (
    <div className="flex justify-center px-4">
      <div className="relative pt-[30px] max-w-full">
        <div className="absolute left-[-120px] hidden md:block">
          <StepsIndicator currentStep={currentStep} />
        </div>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="w-[500px] max-w-full"
          >
            {currentStep === 1 ? (
              <Step1 {...stepProps} />
            ) : currentStep === 2 ? (
              <Step2 {...stepProps} />
            ) : currentStep === 3 ? (
              <Step3 {...stepProps} />
            ) : null}
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default SellerSignupForm;
