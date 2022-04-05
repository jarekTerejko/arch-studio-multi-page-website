import { ImageEl } from "../Image/ImageElement";
import ArrowUp from "../../images/icons/arrow-icon.svg";
import { ScrollToTopBtnWrapper } from "./ScrollToTopBtnElements";
import { useEffect, useState } from "react";

const ScrollToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", toggleIsVisible);

    return () => {
      window.removeEventListener("scroll", toggleIsVisible);
    };
  }, []);

  const toggleIsVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <ScrollToTopBtnWrapper onClick={scrollToTop} isVisible={isVisible}>
        <ImageEl
          src={ArrowUp}
          alt="Back to top of the page"
          style={{ transform: "rotate(270deg)" }}
        />
      </ScrollToTopBtnWrapper>
    </>
  );
};

export default ScrollToTopBtn;
