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

const card = {
  hidden: { opacity: 0, x: 30 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const container = {
  show: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const PortfolioGallery = ({ data }) => {
  return (
    <>
      <PortfolioGalleryWrapper>
        <ContainerEl>
          <HomePageFeaturedGallery
            variants={container}
            initial="hidden"
            animate="show"
            style={{ paddingTop: 0 }}
          >
            {data.map((item, i) => {
              return (
                <HomePageGalleryItem
                  key={i}
                  $bgImgDesktop={item.image.desktop}
                  $bgImgTablet={item.image.tablet}
                  $bgImgMobile={item.image.mobile}
                  variants={card}
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
