import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
export const Text: FC<
  {
    children: ReactNode;
    restrictWidth?: boolean;
    color?: "dark" | "light";
  } & DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
> = ({ children, restrictWidth, className, color = "dark", ...props }) => (
  <span
    className={`${className ? `${className} ` : ""}font-normal font-bold ${
      color === "dark" ? "text-text" : "text-light-text"
    }`}
    style={restrictWidth ? { maxWidth: "30ch" } : {}}
    {...props}
  >
    {children}
  </span>
);
