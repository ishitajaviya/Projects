import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import fStyle from "./style";

import ImageHelper from "helpers/ImageHelper";
import { SCHEDULE_REDIRECT_URL } from "helpers/Config";
import { useNavigate } from "react-router-dom";

const CustGradientBtn = React.lazy(() => import("components/CustGradientBtn"));

const Footer = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const MenuOptions = [
    {
      title: "How it Works",
      sectionId: "HowItWorks",
    },
    {
      title: "Customer Wins ",
      sectionId: "CustomerWins",
    },
    {
      title: "Why Choose Us?",
      sectionId: "WhyChooseUs",
    },
    {
      title: "Transform Your Practice",
      sectionId: "TransformYour",
    },
  ];

  return (
    <>
      <Box sx={fStyle.footerCon}>
        <Grid
          container
          spacing={{ xs: 3, sm: 4 }}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                maxWidth: { xs: "100%", sm: "25rem" },
              }}
            >
              <a href="#Header">
                <Box
                  sx={{
                    margin: { xs: "auto", sm: 0 },
                    width: "max-content",
                    img: {
                      marginTop: { xs: "-0.5rem", sm: "0rem", md: "-3rem" },
                      width: { xs: "5rem", sm: "5rem", md: "6rem", lg: "8rem" },
                    },
                  }}
                >
                  <img src={ImageHelper.logo} alt="log" />
                </Box>
              </a>
              <Typography
                sx={[
                  fStyle.text,
                  {
                    // mt: { xs: "1rem", sm: "2rem" },
                    textAlign: { xs: "center", sm: "left" },
                  },
                ]}
              >
                Restaurant SWS is a marketing platform that helps restaurants attract, convert,
                and retain customers with a suite of marketing automation, campaign management,
                lead tracking, and insight tools, plus expert-led services.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                mt: { xs: "0.5rem", md: 0 },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "center", sm: "start" },
                }}
              >
                <Typography
                  sx={[
                    fStyle.text,
                    {
                      mb: "1rem",
                      fontSize: { xs: "1.5rem", md: "1.8rem" },
                      lineHeight: { xs: "1.75rem", md: "2.5rem" },
                      fontWeight: 700,
                    },
                  ]}
                >
                  Quick Links
                </Typography>
                {MenuOptions.map((item, index) => (
                  <a
                    style={{ textDecoration: "none" }}
                    key={index}
                    href={`/#${item.sectionId}`}
                  >
                    <Typography
                      sx={[
                        fStyle.text,
                        {
                          mb: { xs: "1rem", md: "1rem" },
                          ml: { xs: "0rem", md: "0.25rem" },
                          width: "max-content",
                        },
                        fStyle.link,
                      ]}
                    >
                      {item.title}
                    </Typography>
                  </a>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "center" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "start" },
                flexDirection: "column",
                maxWidth: "20rem",
              }}
            >
              <Typography
                sx={[
                  fStyle.text,
                  {
                    mb: "1rem",
                    fontSize: { xs: "1.5rem", md: "1.8rem" },
                    lineHeight: { xs: "1.75rem", md: "2.5rem" },
                    fontWeight: 700,
                    textAlign: { xs: "center", md: "left" },
                  },
                ]}
              >
                Want one stop solution for your Restaurant?
              </Typography>
              <Typography
                sx={[fStyle.text, { textAlign: { xs: "center", md: "left" } }]}
              >
                Join 130+ officials that how to
              </Typography>
              <Typography
                sx={[fStyle.text, { textAlign: { xs: "center", md: "left" } }]}
              >
                systemize and grow the Restaurant by subscribing to the “Restaurant
              </Typography>
              {/* <Typography
                sx={[fStyle.text, { textAlign: { xs: "center", md: "left" } }]}
              >
                subscribing to the “Restaurant Digital
              </Typography> */}
              <Typography
                sx={[
                  fStyle.text,
                  { textAlign: { xs: "center", md: "left" }, mb: "1.25rem" },
                ]}
              >
                Digital Growth Program”.
              </Typography>
              <input placeholder="Enter your email*" style={fStyle.input} />
              <React.Suspense fallback={<></>}>
                <CustGradientBtn
                  sx={{
                    mt: "1.25rem",
                    height: "50px !important",
                    width: "100% !important",
                    "& .container": {
                      height: "50px !important",
                      lineHeight: "50px !important",
                    },
                  }}
                  type={1}
                  title={"Schedule a Call"}
                  onClick={() => {
                    window.open(SCHEDULE_REDIRECT_URL);
                  }}
                />
              </React.Suspense>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={fStyle.footerInfoCon}>
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          {!isXs && (
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Typography
                sx={[
                  fStyle.text,
                  fStyle.infoText,
                  {
                    fontSize: { xs: "0.9rem", md: "1.1rem" },
                  },
                ]}
              >
                Copyright © 2024 OntarioMediaGroupSWS All rights reserved.
              </Typography>
            </Grid>
          )}
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "auto",
                maxWidth: "45rem",
                flexDirection: { xs: "column", sm: "row" },
                mt: { xs: "0rem", sm: "1rem" },
              }}
            >
              <Typography
                onClick={() => {
                  window.open(
                    window.location.origin + "/privacy-policy",
                    "_blank"
                  );
                  // navigate("/privacy-policy");
                }}
                sx={[
                  fStyle.text,
                  fStyle.infoText,
                  fStyle.link1,
                  fStyle.bottomLink,
                ]}
              >
                Privacy Policy
              </Typography>
              {!isXs && (
                <Box
                  sx={{
                    borderLeft: "1px solid white",
                    height: "1.5rem",
                  }}
                ></Box>
              )}
              <Typography
                onClick={() => {
                  window.open(
                    window.location.origin + "/terms-of-sevices",
                    "_blank"
                  );
                  // navigate("/terms-of-sevices");
                }}
                sx={[
                  fStyle.text,
                  fStyle.infoText,
                  fStyle.link1,
                  fStyle.bottomLink,
                ]}
              >
                Terms Of Service
              </Typography>
              {!isXs && (
                <Box
                  sx={{
                    borderRight: "1px solid white",
                    height: "1.5rem",
                  }}
                ></Box>
              )}
              <Typography
                onClick={() => {
                  window.open(window.location.origin + "/dmca", "_blank");
                  // navigate("/dmca");
                }}
                sx={[
                  fStyle.text,
                  fStyle.infoText,
                  fStyle.link1,
                  fStyle.bottomLink,
                ]}
              >
                DMCA
              </Typography>
            </Box>
          </Grid>
          {isXs && (
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Typography
                sx={[
                  fStyle.text,
                  fStyle.infoText,
                  {
                    fontSize: { xs: "0.9rem", md: "1.1rem" },
                  },
                ]}
              >
                Copyright © 2024 Ontario Media Group SWS All rights reserved.
              </Typography>
            </Grid>
          )}
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
