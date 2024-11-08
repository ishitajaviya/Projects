import zIndex from "@mui/material/styles/zIndex";
import { color } from "@mui/system";
import FontsHelper from "helpers/FontsHelper";

const scStyles = {
  dialog: {
    "& .MuiDialog-paper": {
      borderRadius: "1rem",
    },
  },
  dialogContent: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    p: { xs: "1rem", md: "2rem" },
  },
  closeIconBtn: {
    position: "absolute",
    right: {xs: '0rem', md: '0.5rem'},
    top: {xs: '0rem', md: '0.5rem'},
    zIndex: 999,
  },
  title: {
    ...FontsHelper.font700,
    fontSize: { xs: "1.5rem", md: "1.85rem" },
    lineHeight: { xs: "2rem", md: "2.25rem" },
    textAlign: "center",
    mt: "1rem",
    maxWidth: "30rem",
  },

  desc: {
    ...FontsHelper.font500,
    fontSize: { xs: "0.8rem", md: "1rem" },
    lineHeight: { xs: "1rem", md: "1.25rem" },
    textAlign: "center",
    maxWidth: "27rem",
    my: '1rem'
  },
  subTitle: {
    ...FontsHelper.font600,
    fontSize: { xs: "0.95rem", md: "1.1rem" },
    lineHeight: { xs: "1.1rem", md: "1.5rem" },
    textAlign: "center",
    mt: "1rem",
    maxWidth: "30rem",
  },
  subDesc: {
    ...FontsHelper.font400,
    fontSize: { xs: "0.7rem", md: "0.8rem" },
    lineHeight: { xs: "0.95rem", md: "1.1rem" },
    textAlign: "center",
    maxWidth: "30rem",
    mt: '0.5rem'
  },
  input: {
    width: "100%",
    marginBottom: '1rem'
  }
};

export default scStyles;
