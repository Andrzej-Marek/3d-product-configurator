import { ReactNode } from "react";

export const OptionLabel = ({ children }: { children: ReactNode }) => (
  <label className="text-xs sm:text-sm font-medium lg:text-base">
    {children}
  </label>
);
