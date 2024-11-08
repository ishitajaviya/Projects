import ColorsHelper from "helpers/ColorsHelper";
import FontsHelper from "helpers/FontsHelper";

const ppStyle = {
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    p: { xs: "1rem", md: "2rem" },
    // backgroundColor: '#2f3852',
  },
  subCon: {
    margin: "auto",
    maxWidth: "70rem",
    p: { xs: "1rem", md: "2rem" },
    borderRadius: "1rem",
    backgroundColor: '#2f3852',
    color: 'white',
  },
  text: {
    ...FontsHelper.font500,
    fontSize: { xs: "1rem", md: "1.25rem" },
  },
  title: {
    ...FontsHelper.font600,
    fontSize: { xs: "1.5rem", md: "1.75rem" },
  },
};
export default ppStyle;
