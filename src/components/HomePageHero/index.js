import { ContainerEl } from "../Container/ContainerElement";
import {
  HomepageHeroBgImg,
  HomepageHeroInnerWrapper,
  HomePageHeroLargeHeading,
  HomepageHeroTextWrapper,
  HomePageHeroWrapper,
} from "./HomePageHeroElements";
import { HeadingRegularEl } from "../HeadingRegular/HeadingRegularElement";
import { TextRegularEl } from "../TextRegular/TextRegular";

const HomePageHero = ({ data }) => {
  return (
    <>
      <HomePageHeroWrapper>
        <ContainerEl>
          <HomepageHeroInnerWrapper>
            <HomePageHeroLargeHeading>Welcome</HomePageHeroLargeHeading>
            <HomepageHeroTextWrapper>
              <HeadingRegularEl>{data.heading}</HeadingRegularEl>
              <TextRegularEl>{data.paragraphs.one}</TextRegularEl>
              <TextRegularEl>{data.paragraphs.two}</TextRegularEl>
              <TextRegularEl>{data.paragraphs.three}</TextRegularEl>
            </HomepageHeroTextWrapper>
            <HomepageHeroBgImg bgImg={data.img} />
          </HomepageHeroInnerWrapper>
        </ContainerEl>
      </HomePageHeroWrapper>
    </>
  );
};

export default HomePageHero;
