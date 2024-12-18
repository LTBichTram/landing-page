import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { ButtonHTMLAttributes, forwardRef } from "react";
import Image from "next/image";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-gradient-to-r from-[#a3aadc] to-primary text-white",
        default: "bg-white text-primary border border-primary",
        light: "bg-line text-primaryText hover:bg-line/90",
      },
      color: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    icon?: string;
    iconPosition?: "left" | "right";
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, icon, iconPosition = "left", children, ...props },
    ref
  ) => {
    return (
      <button
        className={cn(
          "flex gap-10 py-3 px-7 text-base hover:opacity-80 font-semibold rounded-full capitalize bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          buttonVariants({ variant }),
          className
        )}
        ref={ref}
        {...props}
      >
        {icon && iconPosition === "left" && (
          <div
            className={`flex items-center justify-center rounded-full ${
              variant === "primary" ? "bg-white" : "bg-primary"
            }`}
          >
            <Image src={icon} alt="Example Image" />
          </div>
        )}
        {children}
        {icon && iconPosition === "right" && (
          <div
            className={`flex items-center justify-center rounded-full w-8 h-8 ${
              variant === "primary" ? "bg-white" : "bg-primary"
            }`}
          >
            <Image src={icon} alt="Example Image" />
          </div>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
