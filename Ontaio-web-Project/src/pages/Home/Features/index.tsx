import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import featureStyle from "./style";
import ColorsHelper from "helpers/ColorsHelper";
import ImageHelper from "helpers/ImageHelper";
import { SCHEDULE_REDIRECT_URL } from "helpers/Config";

const CustGradientBtn = React.lazy(() => import("components/CustGradientBtn"));

const Features = () => {
  const FeaturesData = [
    {
      title1: "Acquire More Customers",
      title2: "Consistently",
      icon: ImageHelper.Feature1,
    },
    {
      title1: "Increase Your",
      title2: "Revenue",
      icon: ImageHelper.Feature2,
    },
    {
      title1: "Increase Your",
      title2: "Profit Margins",
      icon: ImageHelper.Feature3,
    },
    {
      title1: "Boost the Value of",
      title2: "Your Restaurant Experience",
      icon: ImageHelper.Feature4,
    },
    {
      title1: "Free Up",
      title2: "Your Personal Time",
      icon: ImageHelper.Feature5,
    },
    {
      title1: "Positively Impact",
      title2: "More Customers",
      icon: ImageHelper.Feature6,
    },
  ];

  const DentistData = [
    {
      name: "Alan Peter",
      quality: "White Smile",
      image: ImageHelper.Dentist1,
      desc: "Italian, Seafood",
      membership: "Member since July, 2023",
      shadow: "#f4c2f1",
    },
    {
      name: "Ricky Rimpson",
      quality: "John Bestraw",
      image: ImageHelper.Dentist2,
      desc: "Grill and Desserts",
      membership: "Member since Jan, 2023",
      isRounded: true,
      shadow: "#b8c6fb",
    },
    {
      name: "John Bolt",
      quality: "Brentt Destry",
      image: ImageHelper.Dentist3,
      desc: "Grill and Desserts",
      membership: "Member since Aug, 2022",
      shadow: "#ffffff",
    },
  ];

  const isSafari = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    return /^((?!chrome|android).)*safari/i.test(userAgent);
  };

  return (
    <>
      <Box id="TransformYour" sx={featureStyle.container}>
        <Typography
          sx={[
            featureStyle.title,
            { mt: { xs: "2rem", md: "7rem" }, maxWidth: "38rem" },
          ]}
        >
          Transform{" "}
          <span style={{ color: ColorsHelper.skyBlue1 }}>Your Restaurant</span> to
          Work For You
        </Typography>
        <Typography
          sx={[
            featureStyle.desc,
            { mt: { xs: "1rem", md: "2rem" }, maxWidth: "45rem" },
          ]}
        >
          We can't promise instant transformation, but even small changes can
          lead to significant improvements in your restaurant practice.
        </Typography>
        <Box
          sx={{
            maxWidth: "78rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 2 }}
            sx={{
              mt: { xs: "1rem", md: "2rem" },
            }}
          >
            {FeaturesData.map((item, index) => (
              <Grid key={index} item xs={6} md={4} sx={[]}>
                <Box sx={featureStyle.featureCon}>
                  <Box sx={[featureStyle.featureImgCon, isSafari() && {
                    img: {
                      width: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                      height: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                    }
                  }]}>
                    <img loading="lazy" src={item.icon} alt={item.icon} />
                  </Box>
                  <Typography sx={[featureStyle.featureDesc]}>
                    {item.title1}
                  </Typography>
                  <Typography sx={[featureStyle.featureDesc]}>
                    {item.title2}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <React.Suspense fallback={<></>}>
          <CustGradientBtn
            sx={{ mt: "3rem" }}
            type={3}
            title={"Schedule a Free Demo"}
            onClick={() => {
              window.open(SCHEDULE_REDIRECT_URL);
            }}
            hideArrow={true}
          />

        </React.Suspense>
        <Typography
          sx={[
            featureStyle.title,
            {
              mt: { xs: "2rem", md: "7rem" },
              maxWidth: "65rem",
              fontStyle: "italic",
            },
          ]}
        >
          Helped 45+{" "}
          <span style={{ color: ColorsHelper.skyBlueDark }}>Restaurant Owners </span>{" "}
          to Scale to $100,000 per Month
        </Typography>
        <Typography
          sx={[
            featureStyle.desc,
            { mt: { xs: "1rem", md: "2rem" }, maxWidth: "55rem" },
          ]}
        >
          Schedule a free consultation today and see how our Restaurant Digital
          Growth Program can help your practice grow.
        </Typography>

        <Grid
          container
          spacing={2}
          sx={{
            mt: { xs: "1rem", md: "2rem" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          {DentistData.map((dentist, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Box sx={featureStyle.dentCon}>
                <img
                  loading="lazy"
                  src={dentist.image}
                  alt={dentist.image}
                  style={{
                    width: "100%",
                    //filter: `drop-shadow(100px -30px 50px ${dentist.shadow})`,
                  }}
                />
                <Typography
                  sx={[
                    featureStyle.featureDesc1,
                    { textTransform: "uppercase", mt: "2rem" },

                  ]}
                >
                  {dentist.name}
                </Typography>
                <Typography sx={[featureStyle.dentDesc, { mt: "0.1rem" }]}>
                  {dentist.quality}
                </Typography>
                <Typography sx={[featureStyle.dentData, { mt: "0.1rem" }]}>
                  {dentist.desc}
                </Typography>
                <Typography sx={[featureStyle.dentData, { mt: "0.1rem" }]}>
                  {dentist.membership}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Button
          sx={[
            featureStyle.btn,
            { mb: { xs: "3rem", md: "7rem" }, mt: { xs: "1rem", md: "3rem" } },
          ]}
          onClick={() => {
            window.open(SCHEDULE_REDIRECT_URL);
          }}
        >
          Get Started Now
        </Button>
      </Box>
    </>
  );
};

export default Features;
