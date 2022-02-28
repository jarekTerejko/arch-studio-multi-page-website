import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { ContainerEl } from "../Container/ContainerElement";
import { TextRegularEl } from "../TextRegular/TextRegular";
import {
  ContactDetailsMapSectionMapWrapper,
  ContactDetailsMapSectionOfficeName,
  ContactDetailsMapSectionOfficeParagraph,
  ContactDetailsMapSectionOfficeRow,
  ContactDetailsMapSectionOffices,
  ContactDetailsMapSectionOfficesCol,
  ContactDetailsMapSectionOfficesCols,
  ContactDetailsMapSectionPopupTitle,
  ContactDetailsMapSectionWrapper,
  ContactDetailsMapSectionOfficeMapLink,
  ContactDetailsMapSectionOfficeMapLinkText,
} from "./ContactDetailsMapsSectionElements";
import marker from "../../images/icons/pin-icon.png";
import { HeadingRegularEl } from "../HeadingRegular/HeadingRegularElement";

const markerIcon = new L.icon({
  iconUrl: marker,
  popupAnchor: [20, 10],
});

const ContactDetailsMapSection = ({ data }) => {
  return (
    <>
      <ContactDetailsMapSectionWrapper>
        <ContainerEl>
          <ContactDetailsMapSectionOffices>
            <HeadingRegularEl headingContactForm>
              Contact Details
            </HeadingRegularEl>
            <ContactDetailsMapSectionOfficesCols>
              {data.offices.map((office, i) => {
                return (
                  <ContactDetailsMapSectionOfficesCol key={i}>
                    <ContactDetailsMapSectionOfficeName>
                      {office.name}
                    </ContactDetailsMapSectionOfficeName>
                    <ContactDetailsMapSectionOfficeRow>
                      <ContactDetailsMapSectionOfficeParagraph>
                        Mail:
                      </ContactDetailsMapSectionOfficeParagraph>
                      <ContactDetailsMapSectionOfficeParagraph>
                        {office.mail}
                      </ContactDetailsMapSectionOfficeParagraph>
                    </ContactDetailsMapSectionOfficeRow>
                    <ContactDetailsMapSectionOfficeRow>
                      <ContactDetailsMapSectionOfficeParagraph>
                        Address:
                      </ContactDetailsMapSectionOfficeParagraph>
                      <ContactDetailsMapSectionOfficeParagraph>
                        {office.address}
                      </ContactDetailsMapSectionOfficeParagraph>
                    </ContactDetailsMapSectionOfficeRow>
                    <ContactDetailsMapSectionOfficeRow>
                      <ContactDetailsMapSectionOfficeParagraph>
                        Phone:
                      </ContactDetailsMapSectionOfficeParagraph>
                      <ContactDetailsMapSectionOfficeParagraph>
                        {office.phone}
                      </ContactDetailsMapSectionOfficeParagraph>
                    </ContactDetailsMapSectionOfficeRow>
                    <ContactDetailsMapSectionOfficeMapLink href="#map">
                      <ContactDetailsMapSectionOfficeMapLinkText>
                        view on map
                      </ContactDetailsMapSectionOfficeMapLinkText>
                      {/* <ImageEl src={ArrowRight} /> */}
                      <svg
                        width="24"
                        height="20"
                        viewBox="0 0 24 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 1L24 10L15 19"
                          stroke="#1c1d22"
                          strokeWidth="2"
                        />
                        <path d="M0 10H24" stroke="#1c1d22" strokeWidth="2" />
                      </svg>
                    </ContactDetailsMapSectionOfficeMapLink>
                  </ContactDetailsMapSectionOfficesCol>
                );
              })}
            </ContactDetailsMapSectionOfficesCols>
          </ContactDetailsMapSectionOffices>
          <ContactDetailsMapSectionMapWrapper id="map">
            <MapContainer
              center={[
                data.defaultMap.coordinates.lat,
                data.defaultMap.coordinates.lng,
              ]}
              zoom={data.defaultMap.zoom}
              style={{ height: "inherit" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {data.offices.map((office, i) => {
                return (
                  <Marker
                    position={[office.coordinates.lat, office.coordinates.lng]}
                    key={i}
                    icon={markerIcon}
                  >
                    <Popup>
                      <ContactDetailsMapSectionPopupTitle>
                        {office.name}
                      </ContactDetailsMapSectionPopupTitle>
                      <TextRegularEl>{office.address}</TextRegularEl>
                    </Popup>
                  </Marker>
                );
              })}
            </MapContainer>
          </ContactDetailsMapSectionMapWrapper>
        </ContainerEl>
      </ContactDetailsMapSectionWrapper>
    </>
  );
};

export default ContactDetailsMapSection;
