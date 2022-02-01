import { ContainerEl } from "../Container/ContainerElement";
import { HeadingRegularEl } from "../HeadingRegular/HeadingRegularElement";
import MainBtn from "../MainBtn";
import {
  HomePageBannerInnerWrapper,
  HomePageBannerTextWrapper,
  HomePageBannerWrapper,
} from "./HomePageBannerElements";

const HomePageBanner = ({ data }) => {
  return (
    <>
      <HomePageBannerWrapper>
        <ContainerEl fullWithMobile>
          <HomePageBannerInnerWrapper
            $bgImgDesktop={data.desktop}
            $bgImgTablet={data.tablet}
            $bgImgMobile={data.mobile}
          >
            <HomePageBannerTextWrapper>
              <HeadingRegularEl textWhite>
                Small team, big ideas
              </HeadingRegularEl>
              <MainBtn pathname="about" text="about us" isText />
            </HomePageBannerTextWrapper>
          </HomePageBannerInnerWrapper>
        </ContainerEl>
      </HomePageBannerWrapper>
    </>
  );
};

export default HomePageBanner;
