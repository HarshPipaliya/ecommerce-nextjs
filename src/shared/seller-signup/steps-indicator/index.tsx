import React from "react";
import { steps } from "@/shared/seller-signup/utils";
import cn from "@/helper/cn";

interface IProps {
  currentStep: number;
}

const StepsIndicator: React.FC<IProps> = ({ currentStep }) => {
  return (
    <div className="flex gap-2 flex-col items-center">
      {steps.map(({ step, stepName }, index) => {
        return (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center max-w-[100px]">
              <p className="flex items-center justify-center text-white w-[30px] h-[30px] rounded-full bg-blue-600">
                {step}
              </p>
              <p className="text-center text-xs">{stepName}</p>
            </div>
            {index !== steps?.length - 1 && (
              <div
                className={cn(
                  "h-[70px] w-[1px]",
                  currentStep > step ? "bg-blue-700" : "bg-gray-300"
                )}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StepsIndicator;
