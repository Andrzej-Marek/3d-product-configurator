import classNames from "classnames";
import { formatCurrency } from "../utils/formatCurrency";

type AdditionalCostLabelProps = {
  currentAdditionalCost?: number;
  additionalCost?: number;
  isActive: boolean;
  className?: string;
};

const AdditionalCostLabel = ({
  additionalCost = 0,
  currentAdditionalCost = 0,
  isActive,
  className,
}: AdditionalCostLabelProps) => {
  const cost = additionalCost - currentAdditionalCost;

  return (
    <div
      className={classNames(
        "text-center mt-1 sm:mt-2 text-xs",
        {
          "text-black font-medium": isActive,
          "text-gray-300": !isActive,
        },
        className
      )}
    >
      {isActive
        ? formatCurrency(additionalCost)
        : cost > 0
        ? `+${formatCurrency(cost)}`
        : formatCurrency(cost)}
    </div>
  );
};

export default AdditionalCostLabel;
