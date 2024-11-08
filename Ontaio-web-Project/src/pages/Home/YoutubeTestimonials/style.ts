import ColorsHelper from "helpers/ColorsHelper";
import FontsHelper from "helpers/FontsHelper";

const ytStyle = {
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
  ytDataCon: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  ytImgCon: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "1rem",
  },
  ytSubTitle: {
    color: ColorsHelper.white,
    ...FontsHelper.font600,
    fontSize: { xs: "1rem", md: "1.25rem" },
    lineHeight: { xs: "1.25rem", md: "1.5rem" },
    textAlign: "center",
    mt: "1rem",
    maxWidth: '25rem'
  },
  ytTitle: {
    color: ColorsHelper.white,
    ...FontsHelper.font600,
    fontSize: { xs: "1rem", md: "1.2rem" },
    lineHeight: { xs: "1.25rem", md: "1.5rem" },
    overflow: "hidden",
    whiteSpace: "nowrap",
    ml: "0.5rem",
    textOverflow: "ellipsis",
    width: "100%",
  },
  ytName: {
    color: ColorsHelper.white,
    ...FontsHelper.font400,
    fontSize: { xs: "0.5rem", md: "0.9rem" },
    textAlign: "center",
    mt: "0.75rem",
  },
};

export default ytStyle;
