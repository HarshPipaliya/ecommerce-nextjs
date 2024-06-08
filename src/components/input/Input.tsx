import cn from "@/helper/cn";
import React, { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  containerClassname?: string;
  label?: string;
  labelClassname?: string;
  error?: boolean;
  helperText?: string;
  helperClassname?: string;
  fullWidth?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, IProps>(
  (
    {
      className,
      type = "text",
      error,
      helperText,
      label,
      labelClassname,
      containerClassname,
      helperClassname,
      fullWidth,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={cn(containerClassname)}>
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
        <input
          type={type}
          className={cn(
            `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 ${
              error && "!border-red-500"
            } ${fullWidth && "!w-full"}`,
            className
          )}
          ref={ref}
          {...rest}
        />
        {helperText && (
          <p className={cn("text-red-600 text-sm mt-2", helperClassname)}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

export default Input;
