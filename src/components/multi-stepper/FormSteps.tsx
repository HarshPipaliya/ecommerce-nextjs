import React, { ReactNode, useState } from "react";

export type Steps = {
  index: number;
  label?: string;
};

type Props = {
  children?: ReactNode;
  steps: Steps[];
  currentStep: number;
};

const FormSteps: React.FC<Props> = ({ children, currentStep = 1, steps }) => {
  return (
    <div className="flex gap-10">
      <div className="flex flex-col">
        {steps?.map((step, index) => {
          return (
            <div key={index} className="flex flex-col items-center">
              <p
                className={`flex items-center justify-center ${
                  currentStep >= step?.index
                    ? "bg-blue-700 text-white"
                    : "border text-gray-700"
                } w-7 h-7 rounded-full`}
              >
                {step?.index}
              </p>
              {index !== steps?.length - 1 && (
                <div
                  className={`h-[50px] ${
                    currentStep > step?.index ? "bg-blue-700" : "bg-gray-300"
                  } w-[1px] my-2`}
                />
              )}
            </div>
          );
        })}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default FormSteps;
