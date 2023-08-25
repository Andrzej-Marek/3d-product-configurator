import { ReactNode } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import { Placement } from "tippy.js";
import { useWindowDeviceType } from "../../utils/useWindowDeviceType";

export type TooltipProps = {
  content: ReactNode;
  children: ReactNode;
  hide?: boolean;
  placement?: Placement;
  className?: string;
};

const Tooltip = ({
  content,
  children,
  hide,
  placement,
  className,
}: TooltipProps) => {
  const { isMobile, isTablet } = useWindowDeviceType();

  if (hide || isMobile || isTablet) {
    return <>{children}</>;
  }
  return (
    <Tippy
      placement={placement}
      content={<div className="text-center">{content}</div>}
    >
      <div className={className}>{children}</div>
    </Tippy>
  );
};

export default Tooltip;
