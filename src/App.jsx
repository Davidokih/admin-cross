import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AdminRoutePage from "./Components/AdninRoutePage"
import SignInAdmin from "./Components/Admin/SignInAdmin"
import SignUpAdmin from "./Components/Admin/SignUpAdmin"
import AdminPrivate from "./Components/AdminPrivate"
import AdminOtp from "./Components/Admin/AdminOtp"

const App = () => {
  return (
    <div>
      <Routes basename="/">
        <Route path="/" element={ <SignInAdmin />} />
        <Route path="/admin-dashboard/*" element={ <AdminPrivate><AdminRoutePage /></AdminPrivate>} />
        <Route path="/login-admin" element={ <SignInAdmin /> } />
        <Route path="/signup-admin" element={ <SignUpAdmin /> } />
        <Route path="/otp-admin" element={ <AdminOtp /> } />
      </Routes>
    </div>
  );
};

export default App;
