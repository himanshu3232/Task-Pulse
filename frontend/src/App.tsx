import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { userStatusContext } from "./context/userStatusContext";

export default function App() {
  const [loginStatus, setLoginStatus] = useState<boolean>(false);
  const [registerStatus, setRegisterStatus] = useState<boolean>(false);
  return (
    <div className="container-md custom-container">
      <userStatusContext.Provider
        value={{
          loginStatus,
          setLoginStatus,
          registerStatus,
          setRegisterStatus,
        }}
      >
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Router>
      </userStatusContext.Provider>
    </div>
  );
}
