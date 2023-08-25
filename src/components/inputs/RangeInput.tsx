import classNames from "classnames";
import { ReactNode } from "react";

export type RangeInputProps = {
  label: ReactNode;
  min: number;
  max: number;
  step?: number;
  value?: number;
  labelClassName?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const RangeInput = ({
  label,
  max,
  min,
  value,
  step,
  labelClassName,
  onChange,
}: RangeInputProps) => {
  return (
    <>
      <div className="flex items-center gap-2 lg:flex-col lg:items-start">
        <label className={classNames("text-sm", labelClassName)}>{label}</label>
        <div className="flex items-center flex-1 lg:flex-auto lg:w-full">
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            draggable={false}
            onChange={(event) => {
              event.preventDefault();
              onChange?.(event);
            }}
            className="range w-full range-primary "
          />
          <span className="text-primary text-xs sm:text-sm whitespace-nowrap lg:text-right">
            ({value} cm)
          </span>
        </div>
      </div>
    </>
  );
};

export default RangeInput;
