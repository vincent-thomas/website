import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export type LinkProps = {
  children: ReactNode;
  type: "not-styled";
  to: string;
  external?: boolean;
};

export type ILink = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;
