import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import tmStyle from "./style";
import ImageHelper from "helpers/ImageHelper";
import { Grid } from "@mui/material";

const ImageData1 = [
  ImageHelper.Testimonial1,
  ImageHelper.Testimonial4,
  ImageHelper.Testimonial6,
  ImageHelper.Testimonial9,
  ImageHelper.Testimonial12,
  ImageHelper.Testimonial15,
  ImageHelper.Testimonial18,
];
const ImageData2 = [

  ImageHelper.Testimonial2,
  ImageHelper.Testimonial5,
  ImageHelper.Testimonial7,
  ImageHelper.Testimonial10,
  ImageHelper.Testimonial13,
  ImageHelper.Testimonial16,
  ImageHelper.Testimonial19,
  ImageHelper.Testimonial21,
];

const ImageData3 = [
  ImageHelper.Testimonial3,
  ImageHelper.Testimonial8,
  ImageHelper.Testimonial11,
  ImageHelper.Testimonial14,
  ImageHelper.Testimonial17,
  ImageHelper.Testimonial20,
  ImageHelper.Testimonial22,
];

const ImageData4 = [
  ImageHelper.Testimonial3,

  ImageHelper.Testimonial11,
  ImageHelper.Testimonial22,
];
const ImageData5 = [
  ImageHelper.Testimonial8,
  ImageHelper.Testimonial17,
  ImageHelper.Testimonial20,
  ImageHelper.Testimonial14,
];

const Testimonials = () => {
  const [isSeeMore, setIsSeeMore] = useState(false);

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box id={"ClientWins"} sx={tmStyle.container}>
        <Typography sx={[tmStyle.title]}>
          From Good to Great—The Numbers Don’t Lie

        </Typography>
        <Typography sx={[tmStyle.subTitle, { mt: { xs: "1rem", md: "2rem" } }]}>
          Check Out Some Of The Latest growth From Our Best Clients
        </Typography>
        <Box
          sx={{
            mt: { xs: "2rem", md: "7rem" },
            width: "100%",
            height: "max-content",
          }}
        >
          <Grid container spacing={{ xs: 2, sm: 4, md: 6 }}>
            <Grid item xs={12} sm={6} md={4}>
              {ImageData1.slice(0, isXs ? (isSeeMore ? 7 : 5) : 7).map(
                (item, index) => (
                  <Box
                    key={index}
                    sx={{ mb: { xs: "1rem", sm: "2rem", md: "3rem" } }}
                  >
                    <img src={item} alt={item} style={{ width: "100%" }} loading="lazy" />
                  </Box>
                )
              )}
            </Grid>
            {(isXs ? isSeeMore : true) && (
              <Grid item xs={12} sm={6} md={4}>
                {ImageData2.map((item, index) => (
                  <Box
                    key={index}
                    sx={{ mb: { xs: "1rem", sm: "2rem", md: "3rem" } }}
                  >
                    <img src={item} alt={item} style={{ width: "100%" }} loading="lazy" />
                  </Box>
                ))}
              </Grid>
            )}

            {!isXs && isSm ? (
              <>
                <Grid item xs={12} sm={6} md={4}>
                  {ImageData4.map((item, index) => (
                    <Box
                      key={index}
                      sx={{ mb: { xs: "1rem", sm: "2rem", md: "3rem" } }}
                    >
                      <img src={item} alt={item} style={{ width: "100%" }} loading="lazy" />
                    </Box>
                  ))}
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  {ImageData5.map((item, index) => (
                    <Box
                      key={index}
                      sx={{ mb: { xs: "1rem", sm: "2rem", md: "3rem" } }}
                    >
                      <img src={item} alt={item} style={{ width: "100%" }} loading="lazy" />
                    </Box>
                  ))}
                </Grid>
              </>
            ) : (
              <>
                {(isXs ? isSeeMore : true) && (
                  <Grid item xs={12} sm={6} md={4}>
                    {ImageData3.map((item, index) => (
                      <Box
                        key={index}
                        sx={{ mb: { xs: "1rem", sm: "2rem", md: "3rem" } }}
                      >
                        <img src={item} alt={item} style={{ width: "100%" }} loading="lazy" />
                      </Box>
                    ))}
                  </Grid>
                )}
              </>
            )}
          </Grid>
        </Box>
        {isXs && (
          <Button
            id="SeeMoreBtn"
            sx={tmStyle.btn}
            onClick={() => {
              const newValue = !isSeeMore
              if (newValue === false) {
                setTimeout(() => {
                  const seeMoreBtn = document.getElementById('SeeMoreBtn')
                  seeMoreBtn?.scrollIntoView()
                }, 10)
              }
              setIsSeeMore(newValue);
            }}
          >
            See {isSeeMore ? 'less' : 'more'} reviews
          </Button>
        )}
      </Box>
    </>
  );
};

export default Testimonials;

