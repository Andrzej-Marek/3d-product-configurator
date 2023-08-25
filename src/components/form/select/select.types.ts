import { ReactNode } from "react";

export type SelectOption<T = any> = {
  value: string;
  label: ReactNode;
  metadata?: T;
};
