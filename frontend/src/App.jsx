import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import SignUp from "./pages/signup";
import { ForgotPass } from "./pages/forgotpass";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/forgotpass" element={<ForgotPass />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
