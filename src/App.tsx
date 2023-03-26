import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ForgotPasswordPage, LoginPage, PanelPage, RegistrationPage } from "./components";

function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="registration" element={<RegistrationPage/>}/>
        <Route path="forgot-password" element={<ForgotPasswordPage/>}/>
        <Route path="panel" element={<PanelPage/>}/>
      </Routes>
    </>
  );
}

export default App;
