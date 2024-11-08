import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import fStyle from "./styles";

import ImageHelper from "helpers/ImageHelper";
import { SCHEDULE_REDIRECT_URL } from "helpers/Config";
const CustGradientBtn = React.lazy(() => import("components/CustGradientBtn"));

const FooterBanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={[
        fStyle.scheduleCon,
        {
          position: "relative",
        },
      ]}
    >

      <Grid
        container
        spacing={{ xs: 1, md: 1 }}
        sx={{
          mt: { xs: "1rem", md: "1rem" },
        }}
      >
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              "& .laptopImg": {
                position: "relative",
                width: "100%",
                ml: { xs: 0, md: "3%" },
                zIndex: 2,
              },
              "& .arrowImg": {
                width: "22%",
                position: "absolute",
                // original
                // top: "-9%",
                // right: { xs: "20%", md: "18%" },
                // newimage
                top: { xs: "-20%", md: "-22%" },
                right: { xs: "2%", md: "1%" },

                zIndex: 1,
              },
            }}
          >
            <img
              loading="lazy"
              className={"laptopImg"}
              src={ImageHelper.Laptop2}
              alt=""
            />
            <img
              loading="lazy"
              className={"arrowImg"}
              src={ImageHelper.FooterWheel}
              alt=""
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              ml: { xs: "0rem", md: "10%" },
              mt: { xs: "1rem", md: "0rem" },
            }}
          >
            <Typography sx={[fStyle.title]}>Ready to Transform</Typography>
            <Typography sx={[fStyle.title]}>
              Your{" "}
              <span
                style={{
                  color: "#529ac4",
                }}
              >
                Restaurant
              </span>
              ?
            </Typography>
            <Typography sx={[fStyle.desc, { mt: { xs: "1rem", md: "2rem" } }]}>
              Schedule a free consultation today and see how our Restaurant Digital
              Growth Program can help your practice grow.
            </Typography>
            <React.Suspense fallback={<></>}>
              <CustGradientBtn
                sx={{ m: "auto", mt: "3rem" }}
                type={1}
                title={"Schedule Your Free Strategy Session"}
                onClick={() => {
                  window.open(SCHEDULE_REDIRECT_URL);
                }}
              />
            </React.Suspense>
          </Box>
        </Grid>
      </Grid>
    </Box >
  );
};

export default FooterBanner;
