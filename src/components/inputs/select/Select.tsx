import classNames from "classnames";
import { ReactNode, useRef } from "react";
import InputPrepend from "../InputPrepend";
import { CommonFieldProps, FieldSize, fieldStateClasses } from "../types";
import { useBoolState } from "@/hooks/useBoolState";
import FormLabel from "../FormLabel";
import ErrorText from "../ErrorText";
import HelperText from "../HelperText";
import { SelectOption } from "./select.types";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

type SelectProps = {
  prepend?: ReactNode;
  placeholder?: string;
  value?: string;
  onSelect?: (option: SelectOption) => void;
} & CommonFieldProps;

const Select = ({
  prepend,
  errorMessage,
  disabled,
  helperText,
  placeholder,
  label,
  state = "primary",
  size = "md",
  onSelect,
  value,
}: SelectProps) => {
  const [isOpen, open, close] = useBoolState(false);

  const selectPanelRef = useRef<HTMLDivElement>(null!);
  useOnClickOutside(selectPanelRef, close);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "strawberry", label: 1 },
    {
      value: "vanilla",
      label: "Vanilla sdfs dfsdfsdf sdf sdfs df sdf sdfsdfsdfsdfsd sdf s fs",
    },
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const inputState = errorMessage
    ? fieldStateClasses.error
    : fieldStateClasses[state];

  const sizeClasses: Record<FieldSize, string> = {
    sm: "h-8",
    md: "h-10",
    lg: "h-12",
  };

  const onSelectItem = (item: SelectOption) => {
    if (disabled) {
      return;
    }

    onSelect?.(item);
    close();
  };

  return (
    <div className="relative" ref={selectPanelRef}>
      {!!label && (
        <FormLabel disabled={disabled} className={inputState.label}>
          {label}
        </FormLabel>
      )}
      <div className="relative flex">
        <div
          className={classNames(
            "form-select w-full flex flex-col justify-center text-sm rounded-lg border bg-transparent px-3 py-2 ",
            sizeClasses[size],
            inputState.field,
            !!prepend && "pl-9",
            {
              "cursor-not-allowed": disabled,
            }
          )}
          onClick={() => {
            if (disabled) {
              return;
            }

            return isOpen ? close() : open();
          }}
        >
          <span
            className={classNames("leading-[21px]  select-none", {
              "text-slate-400/70": !value,
            })}
          >
            {value ?? placeholder}
          </span>
        </div>
        {!!prepend && <InputPrepend>{prepend}</InputPrepend>}
      </div>
      {!!errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      {!errorMessage && !!helperText && <HelperText>{helperText}</HelperText>}
      {!!isOpen && (
        <div
          className={classNames(
            "shadow-lg rounded-md absolute bottom-0 w-full translate-y-full bg-white z-50 max-h-[340px] overflow-y-auto overflow-x-hidden"
          )}
        >
          {options.map((option) => (
            <div
              className={classNames(
                "hover:translate-x-1 transition-transform cursor-pointer",
                {
                  "translate-x-1": value === option.value,
                }
              )}
              key={option.value}
              onClick={() => onSelectItem(option)}
            >
              {["string", "number"].includes(typeof option.label) ? (
                <div className="px-3 py-2">{option.label}</div>
              ) : (
                option.label
              )}
              <div className="flex-grow border-t border-gray-200" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
