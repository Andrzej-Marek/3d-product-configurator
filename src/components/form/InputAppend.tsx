import { ReactNode } from "react";

type InputAppendProps = {
  children: ReactNode;
};

const InputAppend = ({ children }: InputAppendProps) => (
  <div className="pointer-events-none absolute right-0 flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
    {children}
  </div>
);

export default InputAppend;
