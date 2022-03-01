import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ContainerEl } from "../Container/ContainerElement";
import MainBtn from "../MainBtn";
import { TextRegularEl } from "../TextRegular/TextRegular";
import {
  SliderBtn,
  SliderBtnsWrapper,
  SliderContent,
  SliderContentInnerWrapper,
  SliderHeading,
  SliderMainBtnWrapper,
  SliderTextWrapper,
  SliderWrapper,
} from "./SliderElements";

const Slider = ({ data }) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [sliderNav, setSliderNav] = useState([
    { name: "1", isActive: true },
    { name: "2", isActive: false },
    { name: "3", isActive: false },
    { name: "4", isActive: false },
  ]);

  const toggleSlide = (index) => {
    setSliderIndex(index);
    toggleSliderNav(index);
  };

  const toggleSliderNav = (index) => {
    setSliderNav(
      sliderNav.map((btn, i) => {
        if (i === index) {
          btn.isActive = true;
        } else {
          btn.isActive = false;
        }
        return btn;
      })
    );
  };

  return (
    <>
      <SliderWrapper>
        <ContainerEl fullWithMobile>
          <SliderContent>
            <AnimatePresence exitBeforeEnter initial={false}>
              {data
                .filter((_, iterator) => iterator === sliderIndex)
                .map((item, i) => {
                  return (
                    <SliderContentInnerWrapper
                      $bgImgDesktop={item.images.desktop}
                      $bgImgTablet={item.images.tablet}
                      $bgImgMobile={item.images.mobile}
                      key={sliderIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <SliderTextWrapper>
                        <SliderHeading
                          initial={{ y: -30, opacity: 0 }}
                          transition={{ delay: 0.5 }}
                          animate={{ y: 0, opacity: 1 }}
                        >
                          {item.title}
                        </SliderHeading>
                        <TextRegularEl
                          $textWhite="textWhite"
                          initial={{ x: 30, opacity: 0 }}
                          transition={{ delay: 0.7 }}
                          animate={{ x: 0, opacity: 1 }}
                        >
                          {item.content}
                        </TextRegularEl>
                        <SliderMainBtnWrapper
                          initial={{ y: 20, opacity: 0 }}
                          transition={{ delay: 0.7 }}
                          animate={{ y: 0, opacity: 1 }}
                        >
                          <MainBtn
                            pathname="portfolio"
                            text="see our portfolio"
                            isText
                          />
                        </SliderMainBtnWrapper>
                      </SliderTextWrapper>
                    </SliderContentInnerWrapper>
                  );
                })}
            </AnimatePresence>
            <SliderBtnsWrapper>
              {sliderNav.map((btn, i) => {
                return (
                  <SliderBtn
                    key={btn.name}
                    className={sliderNav[i].isActive ? "active" : ""}
                    onClick={() => toggleSlide(i)}
                  >
                    0{btn.name}
                  </SliderBtn>
                );
              })}
            </SliderBtnsWrapper>
          </SliderContent>
        </ContainerEl>
      </SliderWrapper>
    </>
  );
};

export default Slider;
