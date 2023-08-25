import { ReactNode } from "react";

type OptionLabelProps = {
  children: ReactNode;
};

const OptionLabel = ({ children }: OptionLabelProps) => {
  return <div className="text-dark font-semibold">{children}</div>;
};

export default OptionLabel;
