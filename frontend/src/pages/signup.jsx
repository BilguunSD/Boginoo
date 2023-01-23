import "../css/signup.css";
import logo from "../assets/logofr2.png";
import { Footer } from "../components/footer";
import { useState, useEffect } from "react";
import axios from "axios";

const SignUp = () => {
  const [emailValue, setEmail] = useState("");
  const [passwordValue, setPassword] = useState("");
  const [repeatedpassword, setRepeatPassword] = useState("");

  const fetchUser = async () => {
    try {
      if (repeatedpassword === passwordValue) {
        await axios.post(`http://localhost:8000/user`, {
          email: emailValue,
          password: passwordValue,
        });
        alert("Success");
      } else {
        console.log("Password doesn't match");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUser();
  });

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
          <input
            placeholder="name@mail.domain"
            className="inputbox"
            type="mail"
            value={emailValue}
            onChange={(e) => setEmail(e.currentTarget.value)}
          ></input>
        </div>
        <div className="passwordsection">
          <div className="passtext">Нууц үг</div>
          <input
            placeholder="••••••••••"
            className="inputbox"
            type="password"
            value={passwordValue}
            onChange={(e) => setPassword(e.currentTarget.value)}
          ></input>
        </div>
        <div className="repeatpasssection">
          <div className="repeatpass">Нууц үгээ давтна уу?</div>
          <input
            placeholder="••••••••••"
            className="inputbox"
            type="password"
            value={repeatedpassword}
            onChange={(e) => setRepeatPassword(e.currentTarget.value)}
          ></input>
        </div>
        <button className="registerbutton cursor" onClick={fetchUser}>
          Бүртгүүлэх
        </button>
        <Footer />
      </div>
    </div>
  );
};

export default SignUp;
