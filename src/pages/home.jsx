import "../css/home.css";
import logo from "../assets/logofr2.png";
import { Link } from "react-router-dom";
import { Footer } from "../components/footer";

export const Home = () => {
  return (
    <div className="home">
      <div className="navbar">
        <div className="how cursor">Хэрхэн ажилладаг вэ?</div>
        <Link className="join cursor noUnderline" to="/login">
          Нэвтрэх
        </Link>
      </div>
      <div className="bbody">
        <img alt="" src={logo} className="logo"></img>
        <div className="inputsection">
          <input
            type="text"
            placeholder="https://www.web-huudas.mn"
            className="input"
          ></input>
          <div className="shorten cursor">Богиносгох</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
