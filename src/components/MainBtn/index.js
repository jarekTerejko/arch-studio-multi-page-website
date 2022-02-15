import { ImageEl } from "../Image/ImageElement";
import { MainBtnEl, MainBtnText } from "./MainBtnElements";
import Arrow from "../../images/icons/arrow-icon.svg";

const MainBtn = ({ pathname, text, isText }) => {
  return (
    <MainBtnEl to={pathname}>
      {isText ? <MainBtnText isText>{text}</MainBtnText> : null}
      <ImageEl src={Arrow} alt="" />
    </MainBtnEl>
  );
};

export default MainBtn;
