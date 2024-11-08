import { Box, Typography } from "@mui/material";
import ColorsHelper from "helpers/ColorsHelper";
import FontsHelper from "helpers/FontsHelper";
import React from "react";

type SubHeaderProps = {
  title: string;
  updatedAt: string;
};
const SubHeader = (props: SubHeaderProps) => {
  const { title, updatedAt } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: ColorsHelper.skyBlue1,
        p: { xs: "1rem", md: "2rem", lg: "3rem" },
      }}
    >
      <Typography
        sx={{
          ...FontsHelper.font700,
          fontSize: { xs: "1.5rem", md: "2rem", lg: "2.5rem" },
          color: ColorsHelper.white,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          ...FontsHelper.font500,
          fontSize: { xs: "1rem", md: "1.1rem", lg: "1.3rem" },
          color: ColorsHelper.white,
          mt: { xs: "0rem", md: "0.1rem", lg: "0.25rem" },
        }}
      >
        Updated: {updatedAt}
      </Typography>
    </Box>
  );
};

export default SubHeader;
