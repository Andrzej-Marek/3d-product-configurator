import classNames from "classnames";

type HorizontalDividerLineProps = {
  label?: string;
  className?: string;
};

const HorizontalDividerLine = ({
  className,
  label,
}: HorizontalDividerLineProps) => {
  return (
    <div className={classNames("relative flex items-center", className)}>
      <div className="flex-grow border-t border-gray-300"></div>
      {!!label && (
        <span className="flex-shrink mx-4 text-gray-300">{label}</span>
      )}
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
};

export default HorizontalDividerLine;
