import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const body = document.querySelector("#app");
    body.scrollIntoView(
      {
        behavior: "smooth",
      },
      500
    );
  }, [pathname]);

  return null;
};

export default ScrollToTop;
