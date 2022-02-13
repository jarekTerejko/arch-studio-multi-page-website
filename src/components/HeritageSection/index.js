import { ContainerEl } from "../Container/ContainerElement";
import { HeadingRegularEl } from "../HeadingRegular/HeadingRegularElement";
import { TextRegularEl } from "../TextRegular/TextRegular";
import {
  HeritageSectionBgImg,
  HeritageSectionTextWrapper,
  HeritageSectionWrapper,
  HeritageSectionInnerWrapper,
} from "./HeritageSectionElements";

const HeritageSection = ({ data }) => {
  return (
    <>
      <HeritageSectionWrapper>
        <ContainerEl>
          <HeritageSectionInnerWrapper>
            <HeritageSectionTextWrapper>
              <HeadingRegularEl>{data.heading}</HeadingRegularEl>
              <TextRegularEl>{data.paragraphs.one}</TextRegularEl>
              <TextRegularEl>{data.paragraphs.two}</TextRegularEl>
              <TextRegularEl>{data.paragraphs.three}</TextRegularEl>
            </HeritageSectionTextWrapper>
            <HeritageSectionBgImg bgImgDesktop={data.heritageImg} />
          </HeritageSectionInnerWrapper>
        </ContainerEl>
      </HeritageSectionWrapper>
    </>
  );
};

export default HeritageSection;
