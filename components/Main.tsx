import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return <main className="bg-teal-100 w-full">{children}</main>;
};
