import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]); // Za każdym razem, gdy zmienia się location, strona przewinie się na górę

  return null;
};

export default ScrollToTop;
