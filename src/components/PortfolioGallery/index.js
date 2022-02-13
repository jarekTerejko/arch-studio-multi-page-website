import { ContainerEl } from "../Container/ContainerElement";
import {
  HomePageFeaturedGallery,
  HomePageGalleryItem,
  HomePageGalleryTitle,
} from "../HomePageFeatured/HomePageFeaturedElements";
import {
  PortfolioGalleryDate,
  PortfolioGalleryWrapper,
} from "./PortfolioGalleryElements";

const PortfolioGallery = ({ data }) => {
  return (
    <>
      <PortfolioGalleryWrapper>
        <ContainerEl>
          <HomePageFeaturedGallery style={{ paddingTop: 0 }}>
            {data.map((item, i) => {
              return (
                <HomePageGalleryItem
                  key={i}
                  $bgImgDesktop={item.image.desktop}
                  $bgImgTablet={item.image.tablet}
                  $bgImgMobile={item.image.mobile}
                >
                  <HomePageGalleryTitle>{item.title}</HomePageGalleryTitle>
                  <PortfolioGalleryDate>{item.date}</PortfolioGalleryDate>
                </HomePageGalleryItem>
              );
            })}
          </HomePageFeaturedGallery>
        </ContainerEl>
      </PortfolioGalleryWrapper>
    </>
  );
};

export default PortfolioGallery;
