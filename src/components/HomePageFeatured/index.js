import { ContainerEl } from "../Container/ContainerElement";
import { HeadingRegularEl } from "../HeadingRegular/HeadingRegularElement";
import MainBtn from "../MainBtn";
import {
  HomePageFeaturedHeading,
  HomePageFeaturedInnerWrapper,
  HomePageFeaturedWrapper,
  HomePageFeaturedGallery,
  HomePageGalleryLink,
  HomePageGalleryItem,
  HomePageGalleryTitle,
  HomePageGalleryBtnWrapper,
  HomePageGalleryImgCounter,
} from "./HomePageFeaturedElements";

const HomePageFeatured = ({ data }) => {
  const featuredImgs = [4, 5, 6];
  return (
    <>
      <HomePageFeaturedWrapper>
        <ContainerEl>
          <HomePageFeaturedInnerWrapper>
            <HomePageFeaturedHeading>
              <HeadingRegularEl style={{ marginBottom: 0 }}>
                Featured
              </HeadingRegularEl>
              <HomePageGalleryBtnWrapper hideTabletMobile>
                <MainBtn pathname="portfolio" text="see all" isText />
              </HomePageGalleryBtnWrapper>
            </HomePageFeaturedHeading>
            <HomePageFeaturedGallery>
              {data
                .filter((item) => featuredImgs.includes(item.id))
                .map((item, i) => {
                  return (
                    <HomePageGalleryItem
                      key={i}
                      $bgImgDesktop={item.image.desktop}
                      $bgImgTablet={item.image.tablet}
                      $bgImgMobile={item.image.mobile}
                    >
                      <HomePageGalleryImgCounter>
                        {i + 1}
                      </HomePageGalleryImgCounter>
                      <HomePageGalleryTitle>{item.title}</HomePageGalleryTitle>
                      <HomePageGalleryLink to="portfolio">
                        View all projects
                      </HomePageGalleryLink>
                    </HomePageGalleryItem>
                  );
                })}
            </HomePageFeaturedGallery>
            <HomePageGalleryBtnWrapper showTabletMobile>
              <MainBtn pathname="portfolio" text="see all" isText />
            </HomePageGalleryBtnWrapper>
          </HomePageFeaturedInnerWrapper>
        </ContainerEl>
      </HomePageFeaturedWrapper>
    </>
  );
};

export default HomePageFeatured;
