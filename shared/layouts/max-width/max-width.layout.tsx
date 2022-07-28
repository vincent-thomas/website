import { FC, ReactNode } from "react";

export const MaxWidthLayout: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <section className='max-w-full'>
      <div className={"max-w-max-w mx-auto"}>{children}</div>
    </section>
  );
};
