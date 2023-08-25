import { ReactNode } from "react";

type HelperTextProps = { children: ReactNode };

const HelperText = ({ children }: HelperTextProps) => (
  <span className="text-xs text-slate-400 dark:text-navy-300">{children}</span>
);

export default HelperText;
