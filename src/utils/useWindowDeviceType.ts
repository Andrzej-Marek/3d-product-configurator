import { MOBILE_WIDTH_BREAKPOINT, TABLET_WIDTH_BREAKPOINT } from "../constants";
import { useWindowSize } from "./useWindowSize";

type Return = {
  isMobile: boolean;
  isTablet: boolean;
};
export const useWindowDeviceType = (): Return => {
  const { width } = useWindowSize();

  if (!width) {
    return {
      isMobile: false,
      isTablet: false,
    };
  }

  return {
    isMobile: width < MOBILE_WIDTH_BREAKPOINT,
    isTablet: width < TABLET_WIDTH_BREAKPOINT,
  };
};
