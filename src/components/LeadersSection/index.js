import { ContainerEl } from "../Container/ContainerElement";
import {
  LeadersSectionCardInnerWrapper,
  LeadersSectionCardLeaderName,
  LeadersSectionCardLeaderRole,
  LeadersSectionCardSocialsWrapper,
  LeadersSectionCardsWrapper,
  LeadersSectionCardTextWrapper,
  LeadersSectionCardWrapper,
  LeadersSectionImgWrapper,
  LeadersSectionInnerWrapper,
  LeadersSectionSocialLink,
  LeadersSectionWrapper,
} from "./LeadersSectionElements";
import { ImageEl } from "../Image/ImageElement";
import { HeadingRegularEl } from "../HeadingRegular/HeadingRegularElement";
import LinkedIn from "../../images/icons/linkedin-icon.svg";
import Twitter from "../../images/icons/twitter-icon.svg";

const LeadersSection = ({ data }) => {
  return (
    <>
      <LeadersSectionWrapper>
        <ContainerEl>
          <LeadersSectionInnerWrapper>
            <HeadingRegularEl>{data.heading}</HeadingRegularEl>
            <LeadersSectionCardsWrapper>
              {data.leadersInfo.map((card, i) => {
                return (
                  <LeadersSectionCardWrapper key={i}>
                    <LeadersSectionImgWrapper>
                      <LeadersSectionCardInnerWrapper>
                        <LeadersSectionSocialLink
                          to="#"
                          style={{ marginRight: "1rem" }}
                        >
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.2 0H28.8C30.56 0 32 1.44 32 3.2V28.8C32 30.56 30.56 32 28.8 32H3.2C1.44 32 0 30.56 0 28.8V3.2C0 1.44 1.44 0 3.2 0ZM9.6 27.2V12.8H4.8V27.2H9.6ZM7.2 10.08C5.6 10.08 4.32 8.8 4.32 7.2C4.32 5.6 5.6 4.32 7.2 4.32C8.8 4.32 10.08 5.6 10.08 7.2C10.08 8.8 8.8 10.08 7.2 10.08ZM22.4 27.2H27.2V18.08C27.2 15.04 24.64 12.48 21.6 12.48C20.16 12.48 18.4 13.44 17.6 14.72V12.8H12.8V27.2H17.6V18.72C17.6 17.4401 18.72 16.32 20 16.32C21.28 16.32 22.4 17.4401 22.4 18.72V27.2Z"
                              fill="#fff"
                            />
                          </svg>
                        </LeadersSectionSocialLink>
                        <LeadersSectionSocialLink
                          to="#"
                          style={{ marginLeft: "1rem" }}
                        >
                          <svg
                            width="33"
                            height="27"
                            viewBox="0 0 33 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M32.6001 3.60943C31.4228 4.1321 30.1574 4.4841 28.8294 4.64276C30.1854 3.83076 31.2268 2.5441 31.7161 1.01076C30.4481 1.76276 29.0428 2.30943 27.5468 2.60409C26.3508 1.32809 24.6428 0.530762 22.7548 0.530762C18.5161 0.530762 15.4014 4.48543 16.3588 8.59076C10.9041 8.31743 6.06676 5.70409 2.8281 1.7321C1.1081 4.68276 1.9361 8.54276 4.85876 10.4974C3.7841 10.4628 2.77076 10.1681 1.88676 9.6761C1.81476 12.7174 3.99476 15.5628 7.1521 16.1961C6.2281 16.4468 5.2161 16.5054 4.18676 16.3081C5.02143 18.9161 7.44543 20.8134 10.3201 20.8668C7.5601 23.0308 4.08276 23.9974 0.600098 23.5868C3.50543 25.4494 6.95743 26.5361 10.6641 26.5361C22.8534 26.5361 29.7401 16.2414 29.3241 7.0081C30.6068 6.08143 31.7201 4.92543 32.6001 3.60943Z"
                              fill="#fff"
                            />
                          </svg>
                        </LeadersSectionSocialLink>
                      </LeadersSectionCardInnerWrapper>
                      <ImageEl
                        src={card.img}
                        alt={card.name}
                        title={card.name}
                      />
                    </LeadersSectionImgWrapper>
                    <LeadersSectionCardTextWrapper>
                      <LeadersSectionCardLeaderName>
                        {card.name}
                      </LeadersSectionCardLeaderName>
                      <LeadersSectionCardLeaderRole>
                        {card.role}
                      </LeadersSectionCardLeaderRole>
                      <LeadersSectionCardSocialsWrapper>
                        <LeadersSectionSocialLink
                          to="#"
                          style={{ marginRight: "1rem" }}
                        >
                          <ImageEl src={LinkedIn} alt="" />
                        </LeadersSectionSocialLink>
                        <LeadersSectionSocialLink
                          to="#"
                          style={{ marginLeft: "1rem" }}
                        >
                          <ImageEl src={Twitter} alt="" />
                        </LeadersSectionSocialLink>
                      </LeadersSectionCardSocialsWrapper>
                    </LeadersSectionCardTextWrapper>
                  </LeadersSectionCardWrapper>
                );
              })}
            </LeadersSectionCardsWrapper>
          </LeadersSectionInnerWrapper>
        </ContainerEl>
      </LeadersSectionWrapper>
    </>
  );
};

export default LeadersSection;
