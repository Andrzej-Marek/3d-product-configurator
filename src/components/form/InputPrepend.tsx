import { ReactNode } from "react";

type PrependIconProps = {
  children: ReactNode;
};

const InputPrepend = ({ children }: PrependIconProps) => (
  <div className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary">
    {children}
  </div>
);

export default InputPrepend;
