import ColorsHelper from "helpers/ColorsHelper";
import FontsHelper from "helpers/FontsHelper";

const growthStyle = {
  container: {
    width: "100%",
    padding: { xs: "0.5rem 1rem", md: "1.25rem 4rem" },
    marginTop: '0px',
    backgroundColor: '#1b233a',
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    color: ColorsHelper.white,
    ...FontsHelper.font900,
    fontSize: { xs: "1.9rem", md: "3rem" },
    textAlign: "center",
    lineHeight: { xs: "2.75rem", md: "3.75rem" },
  },
  subTitle: {
    color: ColorsHelper.white,
    ...FontsHelper.font500,
    fontSize: { xs: "1.5rem", md: "2.25rem" },
    letterSpacing: 1,
    textAlign: "center",
  },
  countCon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  countTitle: {
    color: ColorsHelper.skyBlueDark,
    ...FontsHelper.font700,
    fontSize: { xs: "3.25rem", md: "5rem" },
    textAlign: "center",
  },
  plusIcon: {
    color: ColorsHelper.purple3,
    ...FontsHelper.font500,
    fontSize: "1.1rem",
    // top: "25%",
    right: "-8px",
   
  },
  countDesc: {
    color: ColorsHelper.white,
    ...FontsHelper.font500,
    fontSize: { xs: "1rem", md: "1.25rem" },
    textAlign: "center",
  },
  stgCon: {
    display: "flex",
    mb: { xs: "1rem", md: "2rem" },
    maxWidth: "35rem",
    img: {
      height: "max-content",
      mt: "0.5rem",
      width: { xs: "1rem", md: "1.5rem" },
    },
  },
  stgText: {
    color: ColorsHelper.white,
    ...FontsHelper.font500,
    ml: "1rem",
    fontSize: { xs: "1rem", md: "1.6rem" },
  },
  mkDesc: {
    color: ColorsHelper.white,
    ...FontsHelper.font500,
    fontSize: { xs: "1.25rem", md: "1.5rem" },
  },
};

export default growthStyle;
