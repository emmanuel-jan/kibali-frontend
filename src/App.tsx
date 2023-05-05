import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  ActivationPage,
  Explore,
  ForgotPasswordPage,
  InstructorRegistration,
  LandingPage,
  LoginPage,
  ManageContent,
  ManageStudent,
  MyCourses,
  MyProfile,
  PanelPage,
  RegistrationPage,
  TermsConditionsPage,
  VideoDetail,
} from "./components";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import CategoriesPage from "./components/pages/DashboardPages/CategoriesPage/CategoriesPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* public routes */}
        <Route index element={< LandingPage/>}/>
        <Route path="login" element={<LoginPage />} />
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
        <Route path="activate/:uid/:token" element={<ActivationPage />} />
        <Route path="terms" element={<TermsConditionsPage/>} />

        {/* protected routes */}
        <Route path="panel" element={<PanelPage />}>
          <Route index element={<CategoriesPage/>}/>
          <Route path="category/:id" element={<Explore />} />
          <Route path="courses" element={<MyCourses />} />
          <Route path="video-detail/:id" element={<VideoDetail />} />
          <Route path="manage-content" element={<ManageContent />} />
          <Route path="manage-student" element={<ManageStudent />} />
          <Route
            path="instructor-registration"
            element={<InstructorRegistration />}
          />
          <Route path="profile" element={< MyProfile/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
