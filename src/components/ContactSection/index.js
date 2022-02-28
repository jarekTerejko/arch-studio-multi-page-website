import { ContainerEl } from "../Container/ContainerElement";
import { HeadingRegularEl } from "../HeadingRegular/HeadingRegularElement";
import { ImageEl } from "../Image/ImageElement";
import {
  ContactSectionErrorMsg,
  ContactSectionForm,
  ContactSectionInnerWrapper,
  ContactSectionInputLabel,
  ContactSectionInputRow,
  ContactSectionInputText,
  ContactSectionInputTextarea,
  ContactSectionSubmitBtn,
  ContactSectionWrapper,
} from "./ContactSectionElements";
import ArrowRight from "../../images/icons/arrow-icon.svg";
import { useState } from "react";

const ContactSection = () => {
  const [inputValues, setInputValues] = useState({
    firstName: "",
    email: "",
    msg: "",
  });
  const [isSubmited, setIsSubmited] = useState(false);
  const handleInputChange = (e) => {
    if (isSubmited) {
      setIsSubmited(false);
    }
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const isMailValid = (email) => {
    return /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i.test(
      email
    );
  };

  const clearInputs = () => {
    setInputValues({
      firstName: "",
      email: "",
      msg: "",
    });
  };

  const handleSubmit = (e) => {
    setIsSubmited(true);
    if (
      !inputValues.firstName ||
      !inputValues.email ||
      !inputValues.msg ||
      !isMailValid(inputValues.email)
    ) {
      e.preventDefault();
    } else {
      e.preventDefault();
      setIsSubmited(false);
      clearInputs();
    }
  };

  return (
    <>
      <ContactSectionWrapper>
        <ContainerEl>
          <ContactSectionInnerWrapper>
            <HeadingRegularEl headingContactForm>
              Connect with us
            </HeadingRegularEl>
            <ContactSectionForm onSubmit={handleSubmit}>
              <ContactSectionInputRow>
                <ContactSectionInputLabel htmlFor="firstName">
                  Name
                </ContactSectionInputLabel>
                <ContactSectionInputText
                  className={
                    isSubmited && !inputValues.firstName ? "error" : ""
                  }
                  type="text"
                  name="firstName"
                  value={inputValues.firstName}
                  placeholder="name"
                  onChange={(e) => handleInputChange(e)}
                />
                {isSubmited && !inputValues.firstName && (
                  <ContactSectionErrorMsg>
                    Can't be empty
                  </ContactSectionErrorMsg>
                )}
              </ContactSectionInputRow>
              <ContactSectionInputRow>
                <ContactSectionInputLabel htmlFor="email">
                  Email
                </ContactSectionInputLabel>
                <ContactSectionInputText
                  className={`${
                    isSubmited && !inputValues.email ? "error" : ""
                  } ${
                    isSubmited &&
                    inputValues.email &&
                    !isMailValid(inputValues.email)
                      ? "error"
                      : ""
                  }`}
                  type="text"
                  name="email"
                  value={inputValues.email}
                  placeholder="email"
                  onChange={(e) => handleInputChange(e)}
                />
                {isSubmited && !inputValues.email && (
                  <ContactSectionErrorMsg>
                    Can't be empty
                  </ContactSectionErrorMsg>
                )}
                {isSubmited &&
                  inputValues.email &&
                  !isMailValid(inputValues.email) && (
                    <ContactSectionErrorMsg>
                      Please use a valid email address
                    </ContactSectionErrorMsg>
                  )}
              </ContactSectionInputRow>
              <ContactSectionInputRow>
                <ContactSectionInputLabel htmlFor="msg">
                  Message
                </ContactSectionInputLabel>
                <ContactSectionInputTextarea
                  className={isSubmited && !inputValues.msg ? "error" : ""}
                  name="msg"
                  value={inputValues.msg}
                  placeholder="message"
                  onChange={(e) => handleInputChange(e)}
                ></ContactSectionInputTextarea>
                {isSubmited && !inputValues.msg && (
                  <ContactSectionErrorMsg>
                    Can't be empty
                  </ContactSectionErrorMsg>
                )}
              </ContactSectionInputRow>
              <ContactSectionInputRow>
                <ContactSectionSubmitBtn>
                  <ImageEl src={ArrowRight} />
                </ContactSectionSubmitBtn>
              </ContactSectionInputRow>
            </ContactSectionForm>
          </ContactSectionInnerWrapper>
        </ContainerEl>
      </ContactSectionWrapper>
    </>
  );
};

export default ContactSection;
