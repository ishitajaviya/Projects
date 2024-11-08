import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import programStyle from "./style";

import ColorsHelper from "helpers/ColorsHelper";
import ImageHelper from "helpers/ImageHelper";
import { SCHEDULE_REDIRECT_URL } from "helpers/Config";

const Program = () => {
  const strategiesData = [
    "Experienced team with a proven track record in restaurant marketing",
    "Tailored strategies designed specifically for restaurant practices.",
    "Get found, tell your story, and stand out from the competition",
    "Don’t just attract new customers, keep them around too",
  ];
  return (
    <>
      <Box id="WhyChooseUs" sx={programStyle.container}>
        <img
          loading="lazy"
          src={ImageHelper.texture}
          alt=""
          style={{
            opacity: 0.4,
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
          }}
        />
        <Typography
          sx={[programStyle.title, { mt: { xs: "2rem", md: "8rem" } }]}
        >
          Why Choose Restaurant Digital Growth Program?
        </Typography>
        <Typography
          sx={[
            programStyle.desc,
            { mt: { xs: "1rem", md: "2rem" }, maxWidth: "73rem" },
          ]}
        >
          Our Restaurant Digital   Growth Program is designed to help restaurants thrive in a competitive market.
          By leveraging advanced digital marketing strategies, we enable you to attract more customers,
          increase your restaurant’s visibility, and significantly boost your revenue.
        </Typography>
        <Divider
          sx={{
            borderWidth: "1px",
            my: { xs: "1.25rem", md: "2.5rem" },
            width: { xs: "100%", md: "73%" },
            borderColor: ColorsHelper.white,
          }}
        />
        <Box sx={{ mb: "1rem" }}>
          {strategiesData.map((item, index) => (
            <Box key={index} sx={programStyle.stgCon}>
              <img loading="lazy" src={ImageHelper.wheel} alt="*" />
              <Typography sx={[programStyle.stgText]}>{item}</Typography>
            </Box>
          ))}
        </Box>
        <Button
          sx={[programStyle.btn, { mb: { xs: "2rem", md: "4rem" } }]}
          onClick={() => {
            window.open(SCHEDULE_REDIRECT_URL);
          }}
        >
          Get a Free Demo Now
        </Button>
      </Box>
    </>
  );
};

export default Program;
