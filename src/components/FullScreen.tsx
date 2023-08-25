import { ReactNode, useEffect, useRef } from "react";
import { useWindowSize } from "react-use";

type FullScreenProps = {
  children: ReactNode;
  className?: string;
};

function use100vh() {
  const ref = useRef<HTMLDivElement>(null);
  const { height } = useWindowSize();

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    // @ts-ignore
    ref.current.style.height = height + "px";
  }, [height]);

  return ref;
}

const FullScreen = ({ children, className }: FullScreenProps) => {
  const ref = use100vh();
  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
};

export default FullScreen;
