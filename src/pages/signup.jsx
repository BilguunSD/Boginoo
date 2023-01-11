import "../css/signup.css";
import logo from "../assets/logofr2.png";
import { Footer } from "../components/footer";
import { useState, useEffect } from "react";
import axios from "axios";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addAccount = () => {
    const user = { email: email, password: password };
    console.log(user);
  };

  useEffect(() => {
    const users = async () => {
      const result = await axios({
        url: "http://localhost:3000/user",
        method: "POST",
        headers: { uid: "" },
      });
    };
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
            type="text"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          ></input>
        </div>
        <div className="passwordsection">
          <div className="passtext">Нууц үг</div>
          <input
            placeholder="••••••••••"
            className="inputbox"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          ></input>
        </div>
        <div className="repeatpasssection">
          <div className="repeatpass">Нууц үгээ давтна уу?</div>
          <input placeholder="••••••••••" className="inputbox"></input>
        </div>
        <button className="registerbutton cursor" onClick={addAccount}>
          Бүртгүүлэх
        </button>
        <Footer />
      </div>
    </div>
  );
};
