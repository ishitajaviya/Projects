import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

// import homeStyle from "./style";

import ImageHelper from "helpers/ImageHelper";
import { SCHEDULE_REDIRECT_URL } from "helpers/Config";
import ColorsHelper from "helpers/ColorsHelper";
import FontsHelper from "helpers/FontsHelper";
import { BorderAll, Padding } from "@mui/icons-material";

const CustGradientBtn = React.lazy(() => import("components/CustGradientBtn"));

const HomeBanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const scale = ((window.visualViewport ? window.visualViewport.height : (isMobile ? 868 : 904)) / (isMobile ? 868 : 904));
  const scaleX = ((window.visualViewport ? window.visualViewport.width : 1200) / 1200);

  const homeStyle = {
    container: {
      width: "100%",
      padding: { xs: "0.5rem 1rem", md: `1rem 4rem` },
      backgroundColor: '#2f3852',
      pt: { xs: scale * 1 + "rem", md: scale * 3 + "rem" },
      pb: { xs: scale * 1 + "rem", md: scale * 2 + "rem" },
    },
    contentCon: {
      display: "flex",
      flexDirection: "column",
      alignItems: { xs: "center", md: "start" },
      width: "100%",
    },
    descTxtCon: {
      backgroundColor: ColorsHelper.grey1,
      padding: "14px",
      borderRadius: "0.75rem",
      maxWidth: { xs: "100%", md: "86%" },
      width: "100%",
      display: "flex",
      justifyContent: "center",
      "& .MuiTypography-root": {
        color: ColorsHelper.white,
        ...FontsHelper.font600,
        fontSize: { xs: scale * 0.75 + "rem", md: scale * 0.88 + "rem" },
        letterSpacing: 3,
        textAlign: "center",
        maxWidth: "22rem",
      },
    },
    title: {
      color: ColorsHelper.white,
      ...FontsHelper.font500,
      fontSize: { xs: scale * 2.1 + "rem", sm: (scaleX < 1 ? scaleX : 1) * scale * 3.5 + "rem" },
      lineHeight: { xs: scale * 2.5 + "rem", sm: (scaleX < 1 ? scaleX : 1) * scale * 4.8 + "rem" },
      letterSpacing: 1,
      whiteSpace: { xs: "nowrap", sm: "wrap" },
    },
    boldTitle: {
      color: ColorsHelper.skyBlue1,
      ...FontsHelper.font800,
      fontSize: { xs: scale * 1.95 + "rem", sm: (scaleX < 1 ? scaleX : 1) * scale * 3.5 + "rem" },
      lineHeight: { xs: scale * 2.5 + "rem", sm: (scaleX < 1 ? scaleX : 1) * scale * 4.8 + "rem" },
      // whiteSpace: { xs: "nowrap", sm: "nowrap" },
    },
    subTitle: {
      color: ColorsHelper.white,
      ...FontsHelper.font500,
      fontSize: { xs: scale * 0.95 + "rem", md: scale * 1.1 + "rem", },
    },
    brandCon: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
      mt: { xs: scale * 1.5 + "rem", md: scale * 4 + "rem" },
      mb: { xs: scale * 1 + "rem", md: scale * 1 + "rem" },
      // backgroundColor: 'steelblue',
      // padding: '2px',
      // borderRadius: '5px'
      // maxWidth: "70rem",
    },
    brandLogo: {
      px: { xs: "0.5rem", md: "1.5rem" },
      img: {
        width: { xs: "69%", md: "35%" },
        // maxHeight: { xs: scale * 1.5 + "rem", md: scale * 2.5 + "rem" },
        objectFit: "contain",
      },
    },
  };
  return (
    <Box id="HeroSection" sx={homeStyle.container}>
      <Box id="HeroSection">
        <Grid container spacing={{ xs: scale * 4, md: scale * 8 }}>
          <Grid item xs={12} md={6} sx={{ transform: 'rotate(0deg)', writingMode: 'inherit' }}>
            <Box sx={{ ...homeStyle.contentCon, animation: "slideUp 0.6s ease-out" }} >
              <Box sx={homeStyle.descTxtCon}>
                <Typography>
                  TRUSTED BY 130+ FOOD LOVERS FOR FRESHNESS AND HAPPY MEAL
                </Typography>
              </Box>
              <Box sx={{ mt: { xs: scale * 1.5 + "rem", md: '2rem' } }}>
                {/* <Typography component={"span"} sx={homeStyle.title}>
                  Unlock Your Restaurant's
                </Typography> */}
                <Typography component={"span"} sx={homeStyle.title}>
                  Unlock Your Restaurant's
                </Typography>
              </Box>
              <Box>
                {/* <Typography component={"span"} sx={homeStyle.title}>

                </Typography>
                <span style={{ position: "relative" }}>
                  <Typography
                    component={"span"}
                    sx={[
                      homeStyle.boldTitle,
                      { position: "relative", zIndex: 2, whiteSpace: "nowrap" },
                    ]}
                  >
                    Potential Boost Revenue{" "}
                  </Typography>
                  <span
                    style={{
                      position: "absolute",
                      bottom: 3,
                      left: -3,
                      width: "calc(100% + 6px)",
                      height: "1.5rem",

                      zIndex: 1,
                    }}
                  ></span>
                </span> */}
                <Typography component={"span"} sx={homeStyle.title}>
                  <span style={{ position: "relative", width: "max-content" }}>
                    <Typography
                      component={"span"}
                      sx={[
                        homeStyle.boldTitle,
                        { position: "relative", zIndex: 2 },
                      ]}
                    >
                      Potential Boost Revenue{" "}
                    </Typography>
                    <Typography
                      sx={{
                        position: "absolute",
                        bottom: { xs: 6, md: 12 },
                        left: -3,
                        width: "calc(100% + 6px)",
                        height: "1.5rem",

                        zIndex: 1,
                      }}
                    ></Typography>
                  </span>{" "}
                </Typography>
              </Box>
              <Box>
                <Typography component={"span"} sx={homeStyle.title}>
                  <span style={{ position: "relative", width: "max-content" }}>
                    <Typography
                      component={"span"}
                      sx={[
                        homeStyle.boldTitle,
                        { position: "relative", zIndex: 2 },
                      ]}
                    >
                      & Attract More Clients
                    </Typography>
                    <Typography
                      sx={{
                        position: "absolute",
                        bottom: { xs: 6, md: 12 },
                        left: -3,
                        width: "calc(100% + 6px)",
                        height: "1.5rem",

                        zIndex: 1,
                      }}
                    ></Typography>
                  </span>{" "}
                </Typography>
              </Box>
              <Box>
                {/* {isMobile && ( */}
                <Typography component={"span"} sx={homeStyle.title}>
                  with Our Digital Strategy!
                </Typography>
                {/* )} */}
              </Box>
              <React.Suspense fallback={<></>}>
                <CustGradientBtn
                  sx={{
                    mt: { xs: scale * 1.5 + "rem", md: scale * 2 + "rem" },
                    width: { xs: "100% !important", sm: "auto !important" },
                    height: { xs: scale * 45 + "px !important", md: scale * 58 + "px !important" },
                    "& .container": {
                      height: { xs: scale * 45 + "px !important", md: scale * 58 + "px !important" },
                      lineHeight: { xs: scale * 45 + "px !important", md: scale * 58 + "px !important" },
                      fontSize: { xs: scale * 0.95 + "rem !important", md: scale * 1.1 + "rem !important" },
                    },
                  }}
                  type={2}
                  title={"Book a Free Demo"}
                  onClick={() => {
                    window.open(SCHEDULE_REDIRECT_URL);
                  }}
                />
              </React.Suspense>
              <Typography
                sx={[
                  homeStyle.subTitle,
                  {
                    mt: { xs: scale * 2 + "rem", md: scale * 3 + "rem" },
                    display: "flex",
                    alignItems: "center",
                    img: {
                      height: { xs: scale * 17 + "px", md: scale * 20 + "px" },
                      ml: { xs: "0.5rem", md: "0.5rem" },
                      mt: { xs: "-1px", md: "-3px" },
                      mr: "0.25rem",
                    },
                  },
                ]}
              >
                <strong style={{ marginRight: "9px" }}>Excellent </strong> 4.8 out
                of 5
                <img src={ImageHelper.trustpilot} alt="" />
                Trustpilot
              </Typography>
            </Box>
          </Grid>
          {!isMobile && <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex", justifyContent: "flex-end", img: {
                width: { xs: '100%', md: '100%' },
              }
            }}
          >
            <img
              src={ImageHelper.Heronewimage}
              alt="home"
              // style={{ width: "100%"}}
              loading="lazy"
            />
          </Grid>}
        </Grid>
        {isMobile && <Box sx={{ width: '100%', mt: { xs: scale * 1.5 + "rem", md: scale * 2 + "rem" }, }}>
          <img
            src={ImageHelper.Heronewimage}
            alt="home"
            style={{ width: "100%", aspectRatio: '16/10' }}
            loading="lazy"
          />
        </Box>}
        <Grid container sx={homeStyle.brandCon} spacing={0}>
          <Grid item xs={2} md={2} sx={homeStyle.brandLogo}>
            <img loading="lazy" src={ImageHelper.logo1} alt={"logo1"} />
          </Grid>
          <Grid item xs={2} md={2} sx={[homeStyle.brandLogo, { pl: { xs: '1rem', md: '1.5rem' } }]}>
            <img loading="lazy" src={ImageHelper.logo2} alt={"logo2"} />
          </Grid>
          <Grid item xs={2} md={2} sx={[homeStyle.brandLogo, { pr: { xs: '1rem', md: '1.5rem' } }]}>
            <img loading="lazy" src={ImageHelper.logo3} alt={"logo3"} />
          </Grid>
          <Grid item xs={2} md={2} sx={homeStyle.brandLogo}>
            <img loading="lazy" src={ImageHelper.logo4} alt={"logo4"} />
          </Grid>
          <Grid item xs={2} md={2} sx={homeStyle.brandLogo}>
            <img loading="lazy" src={ImageHelper.logo5} alt={"logo5"} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HomeBanner;
