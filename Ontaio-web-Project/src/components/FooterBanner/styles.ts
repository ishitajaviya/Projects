import ColorsHelper from "helpers/ColorsHelper";
import FontsHelper from "helpers/FontsHelper";

const fStyle = {
  scheduleCon: {
    width: "100%",
    padding: { xs: "0.5rem 1rem", sm: "1rem 2rem", md: "1rem 4rem" },
    background: "linear-gradient(180deg, #1B233A 0%, #38393D 100%)",
    
    pt: { xs: "2rem", sm: "4rem", md: "6rem" },
    pb: { xs: "2rem", sm: "4rem", md: "6rem" },
  },
  footerCon: {
    width: "100%",
    padding: { xs: "0.5rem 1rem", md: "1rem 4rem" },
    backgroundColor: ColorsHelper.black,
    pt: { xs: "1rem", md: "4rem" },
    pb: { xs: "1rem", md: "1rem" },
  },
  footerInfoCon: {
    width: "100%",
    padding: { xs: "0.5rem 1rem", md: "1rem 4rem" },
    backgroundColor: ColorsHelper.black,
    pt: { xs: "1rem", md: "1.5rem" },
    pb: { xs: "1rem", md: "3rem" },
    borderTop: { xs: "none", md: "1px solid rgba(255, 255, 255, 0.1)" },
  },
  title: {
    color: ColorsHelper.white,
    ...FontsHelper.font900,
    fontSize: { xs: "1.9rem", md: "3rem" },
    lineHeight: { xs: "2.75rem", md: "3.75rem" },
    textAlign: { xs: "center", md: "left" },
  },
  desc: {
    color: ColorsHelper.white,
    ...FontsHelper.font500,
    fontSize: { xs: "1.25rem", md: "1.5rem" },
    textAlign: { xs: "center", md: "left" },
  },
  titleCon: {
    display: "flex",
  },
  logoTitle: {
    color: ColorsHelper.white,
    ...FontsHelper.font600,
    fontSize: { xs: "2.25rem", md: "3rem" },
    letterSpacing: 1,
    lineHeight: { xs: "2.5rem", md: "3.25rem" },
    textAlign: { xs: "center", md: "left" },
    width: "100%",
  },
  logoSubTitle: {
    color: ColorsHelper.white,
    ...FontsHelper.font500,
    fontSize: { xs: "1rem", md: "1.25rem" },
    letterSpacing: 2,
    textAlign: { xs: "center", md: "left" },
    width: "100%",
  },
  text: {
    color: "rgba(255, 255, 255, 0.8)",
    ...FontsHelper.font500,
    fontSize: { xs: "0.95rem", md: "1.15rem" },
  },
  input: {
    background: "transparent",
    ...FontsHelper.font500,
    outline: "none",
    border: `1px solid ${ColorsHelper.white}`,
    borderRadius: "2rem",
    height: "48px",
    padding: "1rem",
    fontSize: "0.9rem",
    color: ColorsHelper.white,
  },
  infoText: {
    color: ColorsHelper.white,
    textAlign: "center",
    width: { xs: "100%", md: "max-content" },
    my: "0.5rem",
  },
  link: {
    "&:hover": {
      color: ColorsHelper.skyBlueDark,
    },
  },
  bottomLink: {
    px: { xs: "2rem", sm: "0.25rem", md: "0.5rem", lg: "2rem" },
  },
};

export default fStyle;
