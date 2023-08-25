import { ReactNode } from "react";

type ErrorTextProps = {
  children: ReactNode;
};

const ErrorText = ({ children }: ErrorTextProps) => (
  <span className="text-xs text-red-500">{children}</span>
);

export default ErrorText;
