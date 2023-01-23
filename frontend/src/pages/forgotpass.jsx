import "../css/forgotpass.css";
import logo from "../assets/logofr2.png";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

export const ForgotPass = () => {
  const [number, setNumber] = useState("");
  const [to, setTo] = useState("");
  const [value, setValue] = useState(11);
  const [check, setCheck] = useState(false);

  const message = () => {
    const minimum = 100000;
    const maximum = 999999;
    const output =
      Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    return output;
  };

  const checkIt = () => {
    if (value == number) {
      window.location = "/login";
    }
  };

  const email = () => {
    const too = message();
    setNumber(number);
    try {
      setCheck(true);
      emailjs.send(
        "service_e8ek7tz",
        "template_jgwqnaq",
        {
          from_name: "boginoo",
          to_name: to,
          message: number,
          send_to: to,
        },
        "CDvE89GhGtFzXkrIs"
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="forgotpasscon">
      <Header />
      <div className="forgotbody">
        <Link to="/">
          <img src={logo} alt="" className="forgotlogo" />
        </Link>
        <div className="recoverpass">Нууц үг сэргээх</div>
        <div className="willsent">
          Бид таны цахим хаяг руу нууц үг сэргээх хаяг явуулах болно.
        </div>
        <div className="emailsection">
          {check ? (
            <div className="emailtext">Дугаар</div>
          ) : (
            <div className="emailtext">Цахим хаяг</div>
          )}
          {check ? (
            <input
              onChange={(e) => setValue(e.target.value)}
              type="number"
              placeholder="number"
              className="inputbox cursor"
            />
          ) : (
            <input
              onChange={(e) => setTo(e.target.value)}
              type="mail"
              placeholder="name@mail.domain"
              className="inputbox cursor"
            />
          )}
          {check ? (
            <button onClick={checkIt} className="sent">
              СОЛИХ
            </button>
          ) : (
            <button onClick={email} className="sent">
              ИЛГЭЭХ
            </button>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};
