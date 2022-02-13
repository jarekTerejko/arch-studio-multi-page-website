import { ContainerEl } from "../Container/ContainerElement";
import {
  IntroHeaderImg,
  IntroHeaderInnerWrapper,
  IntroHeaderLargeHeading,
  IntroHeaderTextWrapper,
  IntroHeaderWrapper,
} from "./IntroHeaderElements";
import { HeadingRegularEl } from "../HeadingRegular/HeadingRegularElement";
import { TextRegularEl } from "../TextRegular/TextRegular";

const IntroHeader = ({ data }) => {
  return (
    <>
      <IntroHeaderWrapper>
        <ContainerEl fullWithMobile>
          <IntroHeaderInnerWrapper>
            <IntroHeaderImg
              bgImgDesktop={data.hero.image.desktop}
              bgImgTablet={data.hero.image.tablet}
              bgImgMobile={data.hero.image.mobile}
            />
            <IntroHeaderLargeHeading>
              {data.hero.headingLarge}
            </IntroHeaderLargeHeading>
            <IntroHeaderTextWrapper>
              <HeadingRegularEl>{data.hero.heading}</HeadingRegularEl>
              <TextRegularEl style={{ marginBottom: 0 }}>
                {data.hero.paragraph}
              </TextRegularEl>
            </IntroHeaderTextWrapper>
          </IntroHeaderInnerWrapper>
        </ContainerEl>
      </IntroHeaderWrapper>
    </>
  );
};

export default IntroHeader;
