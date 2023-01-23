import "../css/login.css";
import logo from "../assets/logofr2.png";
import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

export const Login = () => {
  const [logEmail, setLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      const res = await axios({
        url: `http://localhost:8000/login`,
        method: "POST",
        data: {
          email: logEmail,
          password: logPassword,
        },
        headers: {
          // authorization: `Bearer ${token}`,
        },
      });
      const token = res?.data?.token;
      console.log(res?.data?.token);
      console.log(res);
      localStorage.setItem("token", token);
      localStorage.setItem("username", logEmail);
      localStorage.setItem("id", res?.data?._id);
      if (res.status === 200) {
        window.location.href = "/";
      }
      setToken(res?.data?.token);
    } catch (err) {
      console.log(err);
    }
  };

  const checkUser = () => {
    const user = localStorage.getItem("token");
    if (user) navigate("/");
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <div className="logincon">
      <Header />
      <div className="loginbody">
        <img src={logo} alt="" className="loginlogo"></img>
        <div className="jointitle">Нэвтрэх</div>
        <div className="emailsection">
          <div className="emailtext">Цахим хаяг</div>
          <input
            placeholder="name@mail.domain"
            className="inputbox"
            type="mail"
            value={logEmail}
            onChange={(e) => setLogEmail(e.currentTarget.value)}
          ></input>
        </div>
        <div className="passwordsection">
          <div className="passtext">Нууц үг</div>
          <input
            placeholder="••••••••••"
            className="inputbox"
            type="password"
            value={logPassword}
            onChange={(e) => setLogPassword(e.currentTarget.value)}
          ></input>
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
        <button onClick={loginUser} className="loginjoin cursor">
          Нэвтрэх
        </button>
        <Link className="ifnew cursor" to="/signup">
          Шинэ хэрэглэгч бол энд дарна уу?
        </Link>
        <Footer />
      </div>
    </div>
  );
};
