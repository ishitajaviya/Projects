import React, { useEffect } from "react";
import Box from "@mui/material/Box";
const Header = React.lazy(() => import("components/Header"));
const HomeBanner = React.lazy(() => import("./HomeBanner"));
const Growth = React.lazy(() => import("./Growth"));
const Testimonials = React.lazy(() => import("./Testimonials"));
const Features = React.lazy(() => import("./Features"));
const Program = React.lazy(() => import("./Program"));
const YoutubeTestimonials = React.lazy(() => import("./YoutubeTestimonials"));
const Footer = React.lazy(() => import("components/Footer"));
const FooterBanner = React.lazy(() => import("components/FooterBanner"));
const ScheduleCallDialog = React.lazy(
  () => import("components/ScheduleCallDialog")
);
const CustLoader = React.lazy(() => import("components/CustLoader"));

const Home = () => {
  useEffect(() => {
    const sectionRoute = window.location.hash;
    if (sectionRoute) {
      const linkElement: any = document.querySelector(
        `a[href="/${sectionRoute}"]`
      );
      if (linkElement) {
        console.log(linkElement);
        linkElement.click();
      }
    }
  }, []);
  return (
    <React.Suspense fallback={<CustLoader />}>
      <Box id="scrollContainer" sx={{ height: "100dvh", width: "100dvw", overflow: "auto" }}>
        <Header />
        <HomeBanner />
        <Growth />
        <Testimonials />
        <Features />
        <Program />
        <YoutubeTestimonials />
        <FooterBanner />
        <Footer />
      </Box>
      <ScheduleCallDialog />
    </React.Suspense>
  );
};

export default Home;
