import "../css/forgotpass.css";
import logo from "../assets/logofr2.png";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const ForgotPass = () => {
  return (
    <div className="forgotpasscon">
      <Header />
      <div className="forgotbody">
        <img src={logo} className="forgotlogo" alt=""></img>
        <div className="recoverpass">Нууц үг сэргээх</div>
        <div className="willsent">
          Бид таны цахим хаяг руу нууц үг сэргээх хаяг явуулах болно.
        </div>
        <div className="emailsection">
          <div className="emailtext">Цахим хаяг</div>
          <input placeholder="name@mail.domain" className="inputbox"></input>
        </div>
        <div className="sent">Илгээх</div>
        <Footer />
      </div>
    </div>
  );
};
