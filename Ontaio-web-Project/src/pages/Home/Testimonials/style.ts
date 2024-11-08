import ColorsHelper from "helpers/ColorsHelper";
import FontsHelper from "helpers/FontsHelper";

const tmStyle = {
  container: {
    width: "100%",
    padding: { xs: "2rem 1rem 3rem 1rem", md: "4rem 4rem 6rem 4rem" },
    backgroundColor: '#2f3852',
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
    fontSize: { xs: "1.25rem", md: "1.85rem" },
    textAlign: "center",
  },
  featureImgCon: {
    background: ColorsHelper.blue3,
    p: { xs: "1rem", md: "2.15rem" },
    borderRadius: "50%",
    aspectRatio: "1/1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  featureDesc: {
    color: ColorsHelper.black,
    ...FontsHelper.font600,
    fontSize: { xs: "1rem", md: "1.4rem" },
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
    my: { xs: "2rem", md: "3rem" },
    p: { xs: "0.5rem", md: "1.5rem" },
  },
  dentDesc: {
    color: ColorsHelper.black,
    ...FontsHelper.font500,
    fontSize: { xs: "1rem", md: "1.35rem" },
    textAlign: "center",
  },
  dentData: {
    color: ColorsHelper.black,
    ...FontsHelper.font500,
    fontSize: { xs: "0.9rem", md: "1.1rem" },
    textAlign: "center",
  },
  btn: {
    mt: { xs: "2rem", md: "4rem" },
    display: "flex",
    height: { xs: "45px", md: "58px" },
    fontSize: { xs: "0.95rem", md: "1.1rem" },
    alignItems: "center",
    borderRadius: "3rem",
    background: ColorsHelper.white,
    padding: "0 1.5rem",
    width: "max-content",
    transition: "width 0.3s",
    ...FontsHelper.font600,
    textAlign: "center",
    textTransform: "none",
    color: ColorsHelper.black,
    border: `0.01rem solid ${ColorsHelper.purple1}`,
    "&:hover": {
      color: ColorsHelper.white,
      background: ColorsHelper.purple1,
    },
  },
};

export default tmStyle;
