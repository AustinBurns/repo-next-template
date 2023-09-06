import { isNumber } from "@austinburns/type-guards";
import { useWindowSize } from "@uidotdev/usehooks";

export const useViewportSize = () => {
  const { width, height } = useWindowSize();

  return {
    width,
    height,
    isMobile: isNumber(width) && width < 768,
    isDesktop: isNumber(width) && width >= 768,
  };
};
