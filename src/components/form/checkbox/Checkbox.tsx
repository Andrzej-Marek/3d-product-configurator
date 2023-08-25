import { CommonFieldProps, FieldSize, fieldStateClasses } from "../types";
import ErrorText from "../ErrorText";
import HelperText from "../HelperText";
import classNames from "classnames";
import FormLabel from "../FormLabel";
import { ChangeEventHandler } from "react";

type CheckboxProps = {
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
} & CommonFieldProps;

const Checkbox = ({
  disabled,
  errorMessage,
  state = "primary",
  label,
  helperText,
  checked,
  onChange,

  size = "md",
}: CheckboxProps) => {
  const inputState = errorMessage
    ? fieldStateClasses.error
    : fieldStateClasses[state];

  const sizeClasses: Record<FieldSize, string> = {
    sm: "h-3.5 w-3.5",
    md: "",
    lg: "h-6 w-6",
  };

  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        {label && <span className="label-text ">{label}</span>}
        <input
          type="checkbox"
          disabled={disabled}
          checked={checked}
          onChange={onChange}
          className="checkbox checkbox-primary"
        />
      </label>
    </div>
  );

  return (
    <div className="">
      <label className="inline-flex items-center space-x-2">
        <input
          disabled={disabled}
          checked={checked}
          onChange={onChange}
          className={classNames(
            "checkbox checkbox-primary rounded border outline-none",
            // inputState.checkbox,
            disabled && "cursor-not-allowed",
            sizeClasses[size]
          )}
          type="checkbox"
        />
        {!!label && (
          <FormLabel disabled={disabled} className={inputState.label}>
            {label}
          </FormLabel>
        )}
      </label>
      <div>
        {!!errorMessage && <ErrorText>{errorMessage}</ErrorText>}
        {!errorMessage && !!helperText && <HelperText>{helperText}</HelperText>}
      </div>
    </div>
  );
};

export default Checkbox;
