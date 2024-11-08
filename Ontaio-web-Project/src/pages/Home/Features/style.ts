import ColorsHelper from "helpers/ColorsHelper";
import FontsHelper from "helpers/FontsHelper";

const featureStyle = {
  container: {
    width: "100%",
    padding: { xs: "0.5rem 1rem", md: "1.25rem 4rem" },
    backgroundColor: '#181d33',
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
  desc: {
    color: ColorsHelper.white,
    ...FontsHelper.font500,
    fontSize: { xs: "1.25rem", md: "1.5rem" },
    textAlign: "center",
  },
  featureImgCon: {
    background: ColorsHelper.skyBlueDark,
    p: { xs: "1rem",sm: '1.5rem', md: "2.15rem" },
    borderRadius: "50%",
    aspectRatio: "1/1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mb: { xs: "0.75rem", md: "1.5rem" },
  },
  featureDesc: {
    color: ColorsHelper.white,
    ...FontsHelper.font600,
    fontSize: { xs: "1rem", md: "1.4rem" },
    textAlign: "center",
  },
  featureDesc1: {
    color: ColorsHelper.skyBlueDark,
    ...FontsHelper.font600,
    fontSize: { xs: "1rem", md: "1.9rem" },
    textAlign: "center",
  },
  featureCon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    my: { xs: "1rem", md: "3rem" },
  },
  dentCon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    my: { xs: "0.5rem", md: "1rem" },
    p: { xs: "0.5rem", md: "1.5rem" },
  },
  dentDesc: {
    color: ColorsHelper.white,
    ...FontsHelper.font500,
    fontSize: { xs: "1rem", md: "1.35rem" },
    textAlign: "center",
  },
  dentData: {
    color: ColorsHelper.white,
    ...FontsHelper.font500,
    fontSize: { xs: "0.9rem", md: "1.1rem" },
    textAlign: "center",
  },
  btn: {
    display: "flex",
    height: { xs: "45px", md: "58px" },
    fontSize: { xs: "0.95rem", md: "1.1rem" },
    alignItems: "center",
    borderRadius: "3rem",
    background: ColorsHelper.skyBlueDark,
    padding: "0 1.5rem",
    width: "max-content",
    transition: "width 0.3s",
    ...FontsHelper.font600,
    textAlign: "center",
    textTransform: "none",
    color: ColorsHelper.white,
    border: `0.01rem solid ${ColorsHelper.skyBlueDark}`,
    "&:hover": {
      color: ColorsHelper.white,
      background: ColorsHelper.skyBlue1,
    },
  },
};

export default featureStyle;
