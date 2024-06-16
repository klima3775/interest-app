// иконка логотипа
import { ReactComponent as Logos } from "../../assets/svg/logo_and_text.svg";
//стиль который вытянул из header.scss
import "./logo.scss";

const logo = () => {
  return (
    <div className="logo-text ">
      <Logos />
    </div>
  );
};
export default logo;
