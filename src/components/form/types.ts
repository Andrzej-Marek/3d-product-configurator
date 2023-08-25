import { ChangeEventHandler, ReactNode } from "react";

export type FieldState = "success" | "error" | "primary";

export type FieldSize = "sm" | "md" | "lg";

export type CommonFieldProps = {
  state?: FieldState;
  size?: FieldSize;
  disabled?: boolean;
  errorMessage?: ReactNode;
  helperText?: ReactNode;
  label?: ReactNode;
  onClick?: () => void;
};
export const fieldStateClasses: Record<
  FieldState,
  { label: string; field: string; checkbox: string }
> = {
  error: {
    label: "text-red-500",
    field:
      "border-red-500 focus:border-red-500 focus:ring-red-500 hover:border-red-500",
    checkbox:
      "border-red-500 focus:border-red-500 focus:ring-red-500 checked:bg-red-500 checked:border-red-500  hover:bg-red-500 text-red-500",
  },
  primary: {
    label: "",
    field:
      "border-slate-300 hover:border-slate-400 focus:border-slate-400 focus:ring-slate-500 hover:ring-slate-500 ",
    checkbox: "",
  },
  success: {
    label: "text-green-500",
    field:
      "border-green-500 hover:border-green-500 focus:border-green-500 focus:ring-green-500 ",
    checkbox:
      "border-green-500 focus:border-green-500 focus:ring-green-500 checked:bg-green-500 checked:border-green-500  hover:bg-green-500 text-green-500",
  },
};
