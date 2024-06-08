"use client";

import { FormSteps } from "@/components/multi-stepper";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ISellerSignupForm, sellerSignupSchema } from "./const";
import { yupResolver } from "@hookform/resolvers/yup";
import PersonalInfo from "./PersonalInfo";
import AdditionInfo from "./AdditionalInfo";
import { Button } from "@/components";

const steps = [
  {
    index: 1,
    label: "Personal",
  },
  {
    index: 2,
    label: "Additional",
  },
  {
    index: 3,
    label: "Protection",
  },
];

const BecomeSeller = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const methods = useForm<ISellerSignupForm>({
    resolver: yupResolver(sellerSignupSchema),
  });
  const onSubmit = (values: ISellerSignupForm) => {
    console.log({ values });
  };
  return (
    <FormSteps steps={steps} currentStep={currentStep}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {currentStep === 1 && <PersonalInfo />}
          {currentStep === 2 && <AdditionInfo />}
          <div className="flex">
            <Button
              onClick={() => {
                setCurrentStep((prev) => prev + 1);
              }}
            >
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </FormSteps>
  );
};

export default BecomeSeller;
