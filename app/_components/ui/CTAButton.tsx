import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  as?: "button" | "a";
} & (
  | ButtonHTMLAttributes<HTMLButtonElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>
);

export default function CTAButton({
  variant = "primary",
  children,
  className,
  as = "button",
  ...props
}: ButtonProps) {
  const baseStyles =
    "rounded-md  px-4 py-2 text-accent-100 transition-colors hover:text-primary-50";
  const variants = {
    primary: "bg-accent-600 hover:bg-accent-700",
    secondary:
      "backdrop-blur-xs text-accent-600 hover:bg-accent-600 hover:text-accent-100",
  };

  const finalClassName = clsx(baseStyles, variants[variant], className);

  if (as === "a") {
    return (
      <a
        className={finalClassName}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={finalClassName}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
