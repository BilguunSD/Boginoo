import "../css/signup.css";
import logo from "../assets/logofr2.png";
import { Footer } from "../components/footer";

export const SignUp = () => {
  return (
    <div className="signupcon">
      <div className="signupnav">
        <div className="how cursor">Хэрхэн ажилладаг вэ?</div>
      </div>
      <div className="signupbody">
        <img src={logo} className="signuplogo" alt=""></img>
        <div className="signtitle">Бүртгүүлэх</div>
        <div className="emailsection">
          <div className="emailtext">Цахим хаяг</div>
          <input placeholder="name@mail.domain" className="inputbox"></input>
        </div>
        <div className="passwordsection">
          <div className="passtext">Нууц үг</div>
          <input placeholder="••••••••••" className="inputbox"></input>
        </div>
        <div className="repeatpasssection">
          <div className="repeatpass">Нууц үгээ давтна уу?</div>
          <input placeholder="••••••••••" className="inputbox"></input>
        </div>
        <div className="registerbutton cursor">Бүртгүүлэх</div>
        <Footer />
      </div>
    </div>
  );
};
