"use client";

import cn from "@/helper/cn";
import React, { InputHTMLAttributes } from "react";

export interface IOption {
  label: string;
  value: string | number;
}

interface IProps extends InputHTMLAttributes<HTMLSelectElement> {
  fullWidth?: boolean;
  label?: string;
  labelClassname?: string;
  error?: boolean;
  containerClassname?: string;
  helperText?: string;
  options: IOption[];
  helperClassname?: string;
}

const Select = React.forwardRef<HTMLSelectElement, IProps>(
  (
    {
      className,
      label,
      placeholder,
      labelClassname,
      error,
      helperText,
      fullWidth,
      containerClassname,
      options,
      helperClassname,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={cn("cursor-pointer", containerClassname)}>
        {label && (
          <label
            className={cn(
              "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
              labelClassname
            )}
          >
            {label}
          </label>
        )}
        <select
          ref={ref}
          className={cn(
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
            fullWidth ? "!w-full" : "",
            error ? "!border-red-500" : "",
            className
          )}
          {...rest}
        >
          {placeholder && (
            <option selected value={""}>
              {placeholder}
            </option>
          )}
          {!!options.length &&
            options.map(({ label, value }, index) => {
              return (
                <option key={`${value}-${index}`} value={value}>
                  {label}
                </option>
              );
            })}
        </select>
        {helperText && (
          <p className={cn("text-red-600 text-sm mt-1", helperClassname)}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
