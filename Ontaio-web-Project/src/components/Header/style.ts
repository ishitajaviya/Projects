// import { hover } from "@testing-library/user-event/dist/hover";
import { Padding } from "@mui/icons-material";
import { colors } from "@mui/material";
import ColorsHelper from "helpers/ColorsHelper";
import FontsHelper from "helpers/FontsHelper";

const headStyle = {
  container: {
    width: "100%",
    px: { xs: "1rem", md: "4rem" },
    backgroundColor: ColorsHelper.white,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  
  },
  menuContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: {xs: "38rem", lg: '42rem'},
    
  },

  menuBtn: {
    textTransform: "none",
    color: ColorsHelper.skyBlueDark,
    ...FontsHelper.font600,
    fontSize: "1rem",
    borderRadius: "2rem",
    px: "0.5rem",
    "&:hover": {
      color:ColorsHelper.skyBlue1,
      fontSize: "1.02rem",
      },
      transition: "fontSize 0.5s ease-in",
      
  },
 
  moreMenuBtn: {
    background: ColorsHelper.white + " !important",
    borderRadius: "0.5rem",
    padding: 0,
    height: "2.25rem",
    width: "2.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default headStyle;
