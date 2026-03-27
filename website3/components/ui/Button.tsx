"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
      primary: "bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-900/20",
      secondary: "bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white",
      accent: "bg-amber-500 text-white hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-500/20",
      outline: "bg-transparent text-gray-900 border-2 border-gray-200 hover:border-gray-900",
      ghost: "bg-transparent text-gray-900 hover:bg-gray-100",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
