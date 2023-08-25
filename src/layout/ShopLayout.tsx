import HeaderNav from "../components/nav/HeaderNav";
import classNames from "classnames";
import { ReactNode } from "react";

type ShopLayoutProps = {
  children: ReactNode;
  className?: string;
};

const ShopLayout = ({ children, className }: ShopLayoutProps) => {
  return (
    // <div className="absolute inset-0">
    <div className="h-[calc(100dvh)]">
      <HeaderNav />
      <div className={classNames("h-[calc(100%-64px)]", className)}>
        {children}
      </div>
    </div>
  );
};

export default ShopLayout;
