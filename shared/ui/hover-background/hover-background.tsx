import { FC, HTMLAttributes } from "react";
interface Props extends HTMLAttributes<HTMLDivElement> {}

export const HoverBackground: FC<Props> = ({ style, ...props }) => {
  return (
    <div
      style={{
        backgroundColor: "transparent",
        padding: "0.75rem",
        borderRadius: "0.5rem",
        transition: "background-color 0.2s ease-in-out",
        ...style
      }}
      {...props}
    />
  );
};
