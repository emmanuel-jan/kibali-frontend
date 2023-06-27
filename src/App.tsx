import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  ActivationPage,
  AdminContent,
  AdminInstructor,
  AdminStudent,
  AdminUsers,
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
  PanelUpgrade,
  QuizPage,
  RegistrationPage,
  ResetPassword,
  SubscribedCourses,
  TermsConditionsPage,
  VideoDetail,
  VideoDetailPaid,
} from "./components";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import CategoriesPage from "./components/pages/DashboardPages/CategoriesPage/CategoriesPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* public routes */}
        <Route index element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
        <Route path="activate/:uid/:token" element={<ActivationPage />} />
        <Route
          path="password/reset/confirm/:uid/:token"
          element={<ResetPassword />}
        />
        <Route path="terms" element={<TermsConditionsPage />} />
        <Route path="panel-upgrade" element={<PanelUpgrade />} />


        {/* protected routes */}
        <Route path="panel" element={<PanelPage />}>
          <Route index element={<CategoriesPage />} />
          <Route path="category/:id" element={<Explore />} />
          <Route path="courses" element={<MyCourses />} />
          <Route path="video-detail/:id" element={<VideoDetail />} />
          <Route path="video-detail-paid/:id" element={<VideoDetailPaid />} />
          <Route path="manage-content" element={<ManageContent />} />
          <Route path="manage-student" element={<ManageStudent />} />
          <Route path="admin-instructors" element={<AdminInstructor />} />
          <Route path="admin-users" element={<AdminUsers />} />
          <Route path="admin-content" element={<AdminContent />} />
          <Route path="admin-students" element={<AdminStudent />} />
          <Route path="subscribed" element={<SubscribedCourses />} />
          <Route
            path="instructor-registration"
            element={<InstructorRegistration />}
          />
          <Route path="profile" element={<MyProfile />} />
          <Route path="quiz/:id" element={<QuizPage/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
