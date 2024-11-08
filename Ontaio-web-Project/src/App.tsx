import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const DMCA = React.lazy(() => import("pages/DMCA"));
const PrivacyPolicy = React.lazy(() => import("pages/PrivacyPolicy"));
const TermsOfServices = React.lazy(() => import("pages/TermsOfServices"));
const Home = React.lazy(() => import("pages/Home/Home"));
const CustLoader = React.lazy(() => import("components/CustLoader"));

function App() {

  useEffect(()=>{
    const heroImage = document.getElementById('heroImage')
    if(heroImage){
      heroImage.style.display = 'none'
    }
  },[])

  return (
    <BrowserRouter>
      <Suspense fallback={<CustLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-sevices" element={<TermsOfServices />} />
          <Route path="/dmca" element={<DMCA />} />
          <Route path="*" element={<Navigate replace={true} to="/" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
