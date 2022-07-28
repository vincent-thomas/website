import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
export const Text: FC<
  {
    children: ReactNode;
    restrictWidth?: boolean;
  } & DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
> = ({ children, restrictWidth, className, ...props }) => (
  <span
    className={`${className} font-normal font-4`}
    style={restrictWidth ? { maxWidth: "50ch" } : {}}
    {...props}
  >
    {children}
  </span>
);
