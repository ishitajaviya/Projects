import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import growthStyle from "./style";

import ColorsHelper from "helpers/ColorsHelper";
import ImageHelper from "helpers/ImageHelper";
import { SCHEDULE_REDIRECT_URL } from "helpers/Config";
import { Padding } from "@mui/icons-material";
import { IconButton } from "@mui/material";
const CustGradientBtn = React.lazy(() => import("components/CustGradientBtn"));

const Growth = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const clientData = [
    {
      title: "Our Trusted Active Restaurants ",
      count: "130",
    },
    {
      title: "Customers Visits Generated",
      count: "156,000",
    },
    {
      title: "Online Ordering Booked",
      count: "73,000",
    },
  ];

  const strategiesData = [
    "Make your restaurant practice stand out!",
    "Retain Restaurant Customers and increase satisfaction with your practice",
    "Attract and acquire new restaurant Customers",
  ];

  return (
    <>
      <Box sx={growthStyle.container}>
        <Typography
          sx={[
            growthStyle.subTitle,
            { mt: { xs: "2rem", md: "6rem" }, maxWidth: "70rem", fontSize: { xs: "1.4rem", md: "2.25rem" }, width: { xs: "100vw", md: "auto" }, },
          ]}
        >
          Transform Your <strong style={{ color: '#529ac4' }}>Restaurant Business</strong> with Proven Marketing Solutions for Success.
          Learn from real success stories and see the impact of
          our proven strategies.
        </Typography>
        <Typography
          sx={[
            growthStyle.title,
            {
              mt: { xs: "2rem", md: "7rem" },
              maxWidth: { xs: "100%", sm: "40rem", md: "65rem" },
              fontSize: { xs: "1.8rem", md: "3rem" },
            },
          ]}
        >
          Dedicated to{" "}
          <span>
            Delivering Exceptional Results{" "}
          </span>{" "}
          For The<strong style={{ color: '#529ac4' }}> Restaurant</strong> Care Industry
        </Typography>
        <Grid
          container
          spacing={{ xs: 1, md: 2 }}
          sx={{ mt: { xs: "2rem", md: "7rem" } }}
        >
          {clientData.map((item, index) => (
            <Grid
              key={index}
              item
              xs={12}
              md={4}
              sx={[
                index === 1 &&
                !isMobile && {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                },
              ]}
            >
              {index === 1 && !isMobile && (
                <Divider
                  orientation="vertical"
                  variant="middle"
                  sx={{ height: "4rem", borderWidth: "1px" }}
                />
              )}
              <Box sx={growthStyle.countCon}>
                <Typography
                  sx={[growthStyle.countTitle, { position: "relative" }]}
                >
                  {item.count}
                  <span
                    style={{ ...growthStyle.plusIcon, position: "absolute" }}
                  >
                    +
                  </span>
                </Typography>
                <Typography sx={[growthStyle.countDesc]}>
                  {item.title}
                </Typography>
              </Box>
              {index === 1 && !isMobile && (
                <Divider
                  orientation="vertical"
                  variant="middle"
                  sx={{ height: "4rem", borderWidth: "1px" }}
                />
              )}
            </Grid>
          ))}
        </Grid>
        <Typography
          sx={[
            growthStyle.title,
            { mt: { xs: "2rem", md: "4rem" }, mb: { xs: "1rem", md: "3rem" }, maxWidth: "55rem" },
          ]}
        >
          Transform Your <strong style={{ color: '#529ac4' }}>Restaurant</strong> Business with Proven Growth Strategies
        </Typography>
      </Box>
      <Grid
        id="HowItWorks"
        container
        spacing={{ xs: 1, md: 4 }}
        sx={{
          backgroundColor: '#1b233a',

        }}

      >
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              "& .laptopImg": {
                position: "relative",
                width: "90%",
                ml: "7%",
                zIndex: 2,
              },
              "& .arrowImg": {
                width: "15%",
                position: "absolute",
                top: "7%",
                zIndex: 1,
              },
            }}
          >
            <img
              loading="lazy"
              className={"arrowImg"}
              src={ImageHelper.twistedArrow}
              alt=""
            />
            <img
              loading="lazy"
              className={"laptopImg"}
              src={ImageHelper.Laptop1}
              alt=""
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ ml: { xs: "1rem", md: "10%" } }}>
            {strategiesData.map((item, index) => (
              <Box key={index} sx={growthStyle.stgCon}>
                <img loading="lazy" src={ImageHelper.wheel} alt={"*"} />
                <Typography sx={[growthStyle.stgText]}>{item}</Typography>
              </Box>
            ))}
            <React.Suspense fallback={<></>}>
              <CustGradientBtn
                sx={{ m: "auto", mt: "3rem" }}
                type={3}
                title={"How it Works"}
                onClick={() => {
                  window.open(SCHEDULE_REDIRECT_URL);
                }}
              />
            </React.Suspense>
          </Box>
        </Grid>
      </Grid>
      <Box sx={growthStyle.container}>
        <Typography
          sx={[
            growthStyle.title,
            { mt: { xs: "2rem", md: "7rem" }, maxWidth: "65rem" },
          ]}
        >
          More Than Just Marketing
        </Typography>
        <Typography sx={[growthStyle.title]}>
          Empowering Your {" "}
          <span style={{ color: ColorsHelper.skyBlue1 }}>
            Restaurant’s Success
          </span>
        </Typography>
        <Box
          sx={{
            px: { xs: "0rem", md: "1.25rem" },
            mb: { xs: "2rem", md: "8rem" },
          }}
        >
          <Grid
            container
            spacing={{ xs: 1, md: 2 }}
            sx={{ mt: { xs: "1rem", md: "3rem" } }}
          >
            <Grid item xs={12} md={6}>
              <Typography sx={[growthStyle.mkDesc]}>
                We see ourselves as dedicated partners in your restaurant's success,
                taking a holistic approach to help you grow.
                Our mission is to anticipate and eliminate challenges before they emerge,
                saving you time and effort so you can focus on delivering unforgettable dining experiences.
              </Typography>
              <Typography
                sx={[growthStyle.mkDesc, { mt: { xs: "1rem", sm: "2rem" } }]}
              >
                We treat your <strong>restaurant</strong> like our own.
                Your goals become our goals, and your challenges become our challenges.
                Our job is to tackle these challenges with our proven, battle-tested systems,
                ensuring your restaurant thrives and continues to grow.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                img: {
                  width: { xs: "100%", md: "90%" },
                  mt: { xs: "1.5rem", md: "0rem" },
                },
              }}
            >
              <img src={ImageHelper.Heronewimage} alt="home" loading="lazy" />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Growth;
