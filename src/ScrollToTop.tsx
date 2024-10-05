import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.getAttribute("href") === window.location.pathname) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("click", handleLinkClick);

    return () => {
      window.removeEventListener("click", handleLinkClick);
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
