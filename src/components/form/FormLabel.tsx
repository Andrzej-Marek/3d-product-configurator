import classNames from "classnames";
import { ReactNode } from "react";

type FormLabelProps = {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
};

const FormLabel = ({ children, className, disabled }: FormLabelProps) => (
  <span
    className={classNames(className, {
      "text-gray-400 cursor-not-allowed": disabled,
    })}
  >
    {children}
  </span>
);

export default FormLabel;
