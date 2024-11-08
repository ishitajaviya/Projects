import ColorsHelper from "helpers/ColorsHelper";
import FontsHelper from "helpers/FontsHelper";

const programStyle = {
  container: {
    width: "100%",
    backgroundColor: '#1b233a',
    padding: { xs: "0.5rem 1rem", md: "1.25rem 4rem" },
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
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
  stgCon: {
    display: "flex",
    mb: { xs: "1rem", md: "1rem" },
    maxWidth: "40rem",
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
    fontSize: { xs: "1rem", md: "1.75rem" },
  },
  btn: {
    display: "flex",
    height: { xs: "45px", md: "58px" },
    fontSize: { xs: "0.95rem", md: "1.1rem" },
    alignItems: "center",
    borderRadius: "3rem",
    background: ColorsHelper.skyBlue1,
    padding: "0 1.5rem",
    width: "max-content",
    transition: "width 0.3s",
    ...FontsHelper.font600,
    textAlign: "center",
    textTransform: "none",
    color: ColorsHelper.white,
    border: `0.01rem solid ${ColorsHelper.skyBlue1}`,
    "&:hover": {
      color: ColorsHelper.white,
      background: ColorsHelper.skyBlueDark,
    },
  },
};

export default programStyle;
