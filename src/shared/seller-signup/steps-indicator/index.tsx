import React from "react";
import { steps } from "@/shared/seller-signup/utils";
import cn from "@/helper/cn";

interface IProps {
  currentStep: number;
}

{
  /* <div className="flex gap-10">
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
</div> */
}

const StepsIndicator: React.FC<IProps> = ({ currentStep }) => {
  return (
    <div className="flex gap-2 flex-col items-center">
      {steps.map(({ step, stepName }, index) => {
        return (
          <>
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
          </>
        );
      })}
    </div>
    // <div className="flex gap-10">
    //   <div className="flex flex-col">
    //     {steps?.map(({ step, stepName }, index) => {
    //       return (
    //         <div key={index} className="flex flex-col items-center">
    //           <p
    //             className={`flex items-center justify-center ${
    //               currentStep >= step
    //                 ? "bg-blue-700 text-white"
    //                 : "border text-gray-700"
    //             } w-7 h-7 rounded-full`}
    //           >
    //             {stepName}
    //           </p>
    //           {index !== steps?.length - 1 && (
    //             <div
    //               className={`h-[50px] ${
    //                 currentStep > step ? "bg-blue-700" : "bg-gray-300"
    //               } w-[1px] my-2`}
    //             />
    //           )}
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

export default StepsIndicator;
