import classNames from "classnames";
import { ReactNode } from "react";

type CardProps = { className?: string; children: ReactNode };

const Card = ({ className, children }: CardProps) => {
  return (
    <div className={classNames("rounded py-6 px-4 bg-white shadow", className)}>
      {children}
    </div>
  );
};

export default Card;
