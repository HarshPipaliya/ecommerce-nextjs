import React, { ButtonHTMLAttributes } from "react";
import cn from "@/helper/cn";

export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  fullWidth?: boolean;
  variant?: "contained" | "outlined";
  color?: "primary" | "error" | "warning" | "info" | "success";
}

const Button = React.forwardRef<HTMLButtonElement, IProps>(
  (
    {
      loading,
      children,
      className,
      fullWidth,
      variant = "contained",
      color = "primary",
      ...rest
    },
    ref
  ) => {
    return (
      <button
        className={cn(
          `border border-blue-800 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 flex items-center justify-center gap-1 ${
            fullWidth && "!w-full"
          } ${
            variant === "outlined" &&
            "bg-transparent hover:bg-transparent !text-blue-800 border border-blue-800"
          } ${
            color === "error" &&
            "bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          } ${
            color === "warning" &&
            "bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          } ${
            color === "success" &&
            "bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          } ${
            color === "info" &&
            "!bg-none text-white border-0 hover:!bg-transparent"
          }`,
          className
        )}
        ref={ref}
        {...rest}
      >
        {loading ? <p>Loading...</p> : children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
