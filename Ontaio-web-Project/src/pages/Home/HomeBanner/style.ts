import ColorsHelper from "helpers/ColorsHelper";
import FontsHelper from "helpers/FontsHelper";

const homeStyle = {
  container: {
    width: "100%",
    padding: { xs: "0.5rem 1rem", md: "1rem 4rem" },
    backgroundColor: ColorsHelper.black,
    pt: { xs: "1rem", md: "3rem" },
    pb: { xs: "1rem", md: "2rem" },
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
      fontSize: { xs: "0.75rem", md: "0.88rem" },
      letterSpacing: 3,
      textAlign: "center",
      maxWidth: "22rem",
    },
  },
  title: {
    color: ColorsHelper.white,
    ...FontsHelper.font500,
    fontSize: { xs: "2.1rem", sm: "3.6rem" },
    lineHeight: { xs: "2.5rem", sm: "4.8rem" },
    letterSpacing: 1,
    whiteSpace: { xs: "nowrap", sm: "wrap" },
  },
  boldTitle: {
    color: ColorsHelper.white,
    ...FontsHelper.font800,
    fontSize: { xs: "1.95rem", sm: "3.5rem" },
    lineHeight: { xs: "2.5rem", sm: "4.8rem" },
    // whiteSpace: { xs: "nowrap", sm: "nowrap" },
  },
  subTitle: {
    color: ColorsHelper.white,
    ...FontsHelper.font500,
    fontSize: { xs: "0.95rem", md: "1.1rem" },
  },
  brandCon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    mt: { xs: "1rem", md: "3rem" },
    mb: { xs: "1rem", md: "1rem" },
    // maxWidth: "70rem",
  },
  brandLogo: {
    px: { xs: "0.5rem", md: "1.5rem" },
    img: {
      width: "100%",
      maxHeight: { xs: "1.5rem", md: "2.5rem" },
      objectFit: "contain",
    },
  },
};

export default homeStyle;
