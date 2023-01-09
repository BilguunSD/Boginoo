import "../css/login.css";
import logo from "../assets/logofr2.png";
import { Link } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const Login = () => {
  return (
    <div className="logincon">
      <Header />
      <div className="loginbody">
        <img src={logo} alt="" className="loginlogo"></img>
        <div className="jointitle">Нэвтрэх</div>
        <div className="emailsection">
          <div className="emailtext">Цахим хаяг</div>
          <input placeholder="name@mail.domain" className="inputbox"></input>
        </div>
        <div className="passwordsection">
          <div className="passtext">Нууц үг</div>
          <input placeholder="••••••••••" className="inputbox"></input>
        </div>
        <div className="ticksection">
          <div className="checkcheck">
            <input type="checkbox" className="checkbox"></input>
            <div className="rememberme">Намайг сана</div>
          </div>

          <Link className="forgorpassword cursor" to="/forgotpass">
            Нууц үгээ мартсан
          </Link>
        </div>
        <div className="loginjoin cursor">Нэвтрэх</div>
        <Link className="ifnew cursor" to="/signup">
          Шинэ хэрэглэгч бол энд дарна уу?
        </Link>
        <Footer />
      </div>
    </div>
  );
};
