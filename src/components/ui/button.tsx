import { type ButtonHTMLAttributes, forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

const button = tv(
  {
    base: "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed",
    variants: {
      variant: {
        primary:
          "bg-green-600 hover:bg-green-700 text-white disabled:bg-green-700/50",
        secondary:
          "bg-gray-200 hover:bg-gray-300 text-neutral-900 disabled:bg-gray-300/50",
        ghost:
          "bg-transparent hover:bg-gray-800 text-white disabled:text-white/50",
        outline:
          "bg-transparent border border-gray-200 hover:bg-gray-800 text-white disabled:border-gray-700/50",
      },
      size: {
        sm: "px-3 py-1.5 text-xs",
        md: "px-6 py-2.5 text-sm",
        lg: "px-8 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
  {
    twMerge: true,
  },
);

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">,
    VariantProps<typeof button> {
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={button({ variant, size, className })}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
