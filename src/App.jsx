import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import HomePage from "./Pages/HomePage";
import SignInPage from "./Pages/SignInPage";
import UpgradePage from './Pages/UpgradePage'
import useAuthStore from "./store/userInfo";
import Home from "./Pages/Home";
import React, { useEffect, useState } from "react";


const AboutUsPage = React.lazy(()=>import('./Pages/AboutUsPage'))
const PricingPage = React.lazy(()=>import('./Pages/PricingPage'))
const PageNotFound = React.lazy(()=>import('./Pages/PageNotFound'))



const App = () => {
const { isLoggedIn, loadUserFromLocalStorage } = useAuthStore();
   useEffect(() => {
    loadUserFromLocalStorage();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* if User is logged in, show Home, else show HomePage */}
        <Route path="/" element={ isLoggedIn ? <Home/> : <HomePage/>} />
        <Route path="/sign-in" element={ <SignInPage/>} />
        <Route path="/upgrade" element={<UpgradePage/>}/>
        <Route path="/pricing" element={<PricingPage/>} />
        <Route path="/about-us" element={<AboutUsPage/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
     <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
