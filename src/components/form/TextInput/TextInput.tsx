import classNames from "classnames";
import { ChangeEventHandler, ReactNode, forwardRef } from "react";
import ErrorText from "../ErrorText";
import HelperText from "../HelperText";
import FormLabel from "../FormLabel";
import { CommonFieldProps, FieldSize, fieldStateClasses } from "../types";
import InputMask from "react-input-mask";
import InputPrepend from "../InputPrepend";
import InputAppend from "../InputAppend";

export type TextInputProps = {
  placeholder?: string;
  prepend?: ReactNode;
  append?: ReactNode;
  mask?: string;

  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
} & CommonFieldProps;

const sizeClasses: Record<FieldSize, string> = {
  sm: "h-8",
  md: "h-10",
  lg: "h-12",
};

const TextInput = forwardRef(
  (
    {
      size = "md",
      label,
      helperText,
      disabled,
      errorMessage,
      placeholder,
      state = "primary",
      prepend,
      mask = "",
      value,
      onChange,
      append,
      onClick,
      ...props
    }: TextInputProps,
    ref
  ) => {
    const inputState = errorMessage
      ? fieldStateClasses.error
      : fieldStateClasses[state];
    return (
      <div className="w-full">
        <label className="block space-y-1">
          {!!label && (
            <FormLabel disabled={disabled} className={inputState.label}>
              {label}
            </FormLabel>
          )}
          <div className="relative flex">
            <InputMask
              ref={ref}
              mask={mask}
              onChange={onChange}
              className={classNames(
                "form-input w-full rounded-lg border bg-transparent px-3 py-2  placeholder:text-sm placeholder:text-slate-400/70 outline-none",
                sizeClasses[size],
                inputState.field,
                !!prepend && "pl-9",
                !!append && "pr-9",
                {
                  "cursor-not-allowed": disabled,
                }
              )}
              placeholder={placeholder}
              type="text"
              disabled={disabled}
              value={value}
              onClick={onClick}
              {...props}
            />
            {!!prepend && <InputPrepend>{prepend}</InputPrepend>}
            {!!append && <InputAppend>{prepend}</InputAppend>}
          </div>
        </label>
        {!!errorMessage && <ErrorText>{errorMessage}</ErrorText>}
        {!errorMessage && !!helperText && <HelperText>{helperText}</HelperText>}
      </div>
    );
  }
);

export default TextInput;
