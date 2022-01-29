import { ImageEl } from "../Image/ImageElement";
import { MainBtnEl, MainBtnText } from "./MainBtnElements";
import Arrow from "../../images/icons/arrow-icon.svg";

const MainBtn = ({ pathname, text }) => {
  return (
    <MainBtnEl to={pathname}>
      <MainBtnText isText >{text}</MainBtnText>
      <ImageEl src={Arrow} alt="" />
    </MainBtnEl>
  );
};

export default MainBtn;
