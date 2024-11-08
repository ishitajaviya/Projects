import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import ytStyle from "./style";
import ColorsHelper from "helpers/ColorsHelper";
import ImageHelper from "helpers/ImageHelper";

const YoutubeTestimonials = () => {
  const YoutubeData = [
    {
      title: "Zach Williams Testimonials for Zach Williams Testimonials for",
      subTitle:
        '"We went from $80,000/month to over $300,000/month in six months!"',
      name: "Zach Williams, Food vlogger",
      image: ImageHelper.Youtube1,
    },
    {
      title: "Rechard Yu on Testimonials for Zach Williams Testimonials for",
      subTitle:
        '"We went from $80,000/month to over $300,000/month in six months!"',
      name: "Richard Yu, Banff NY vlogger",
      image: ImageHelper.Youtube2,
    },
    {
      title: "Alan Bridgs for welness on Testimonials for",
      subTitle: '“We hit our first ever $60,000/month with you!"',
      name: "Alan Bridgs, Food vlogger",
      image: ImageHelper.Youtube3,
    },
    {
      title: "Zach Williams Testimonials for Zach Williams Testimonials for",
      subTitle: '“We hit our first ever $60,000/month with you!"',
      name: "Alan Bridgs, Food vlogger",
      image: ImageHelper.Youtube4,
    },
    {
      title: "Zach Williams Testimonials for Zach Williams Testimonials for",
      subTitle: '“We hit our first ever $60,000/month with you!"',
      name: "Alan Bridgs, Food vlogger",
      image: ImageHelper.Youtube4,
    },
    {
      title: "Zach Williams Testimonials for Zach Williams Testimonials for",
      subTitle: '“We hit our first ever $60,000/month with you!"',
      name: "Alan Bridgs, Food vlogger",
      image: ImageHelper.Youtube4,
    },
  ];
  return (
    <>
      <Box sx={ytStyle.container}>
        <Typography
          sx={[
            ytStyle.title,
            {
              mt: { xs: "2rem", md: "7rem" },
            },
          ]}
        >
          Here's Some More Proof
        </Typography>
        <Typography sx={[ytStyle.title]}>
          (From
          <span style={{ color: ColorsHelper.skyBlue1 }}> Our Best Customers</span>)
        </Typography>
        <Typography
          sx={[
            ytStyle.desc,
            { mt: { xs: "1rem", md: "2rem" }, maxWidth: "65rem" },
          ]}
        >
          All testimonials on this page are from real Customers. The results you
          see on this page are not typical. Their experiences do not guarantee
          similar results.  Individual results may vary based on your skills,
          experience, motivation, as well as other unforeseen factors. The
          restaurant has yet to perform studies of the results of its typical
          Customers. Your results may vary.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 2 }}
            sx={{
              mt: { xs: "2rem", md: "4rem" },
              mb: { xs: "3rem", md: "6rem" },
            }}
          >
            {YoutubeData.map((item, index) => (
              <Grid key={index} item xs={12} sm={6} md={4} sx={[]}>
                <Box sx={ytStyle.ytDataCon}>
                  <Box sx={ytStyle.ytImgCon}>
                    <Box
                      sx={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        borderRadius: "1rem",
                        // background:
                        //   "linear-gradient( rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);",
                        background:
                          "linear-gradient(rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0) 70%)",
                      }}
                    ></Box>
                    <Box
                      sx={{
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        px: "0.5rem",
                        top: "0.6rem",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          width: "calc(100% - 4rem)",
                        }}
                      >
                        <img
                          loading="lazy"
                          src={ImageHelper.ChannelLogo}
                          alt="channel"
                          style={{ width: "2.75rem" }}
                        />
                        <Typography sx={[ytStyle.ytTitle]}>
                          {item.title}
                        </Typography>
                      </Box>
                      <IconButton>
                        <img
                          loading="lazy"
                          src={ImageHelper.MoreVert}
                          alt="."
                        />
                      </IconButton>
                    </Box>
                    <img
                      loading="lazy"
                      src={ImageHelper.YoutubePlay}
                      alt="play"
                      style={{ position: "absolute" }}
                    />
                    <img
                      loading="lazy"
                      src={item.image}
                      alt={item.image}
                      style={{ width: "100%", aspectRatio: "16/10" }}
                    />
                  </Box>
                  <Typography sx={[ytStyle.ytSubTitle]}>
                    {item.subTitle}
                  </Typography>
                  <Typography sx={[ytStyle.ytName]}>{item.name}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default YoutubeTestimonials;
