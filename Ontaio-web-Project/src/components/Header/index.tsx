import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Popper from "@mui/material/Popper";

import headStyle from "./style";

import ColorsHelper from "helpers/ColorsHelper";
import ImageHelper from "helpers/ImageHelper";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { SCHEDULE_REDIRECT_URL } from "helpers/Config";
import { useNavigate } from "react-router-dom";

const CustGradientBtn = React.lazy(() => import("components/CustGradientBtn"));

const Header = (props: any) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();

  const MenuOptions = [
    {
      title: "How it Works",
      sectionId: "HowItWorks",
    },
    {
      title: "Client Wins ",
      sectionId: "ClientWins",
      isDropdown: false,
    },
    {
      title: "Why Choose Us?",
      sectionId: "WhyChooseUs",
    },
    {
      title: "Transform Your Practice",
      sectionId: "TransformYour",
    },
  ];

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const scale = ((window.visualViewport ? window.visualViewport.height : (isMobile ? 868 : 904)) / (isMobile ? 868 : 904));

  return (
    <Box id="Header" sx={headStyle.container}>
      <Box
        sx={{
          padding: '11px',
          width: { xs: scale * 4.5 + "rem", md: scale * 8 + "rem" },
          img: {
            width: { xs: scale * 3.5 + "rem", md: scale * 8 + "rem" },
            marginTop: '10px',
            paddingRight: '10px',
          },
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={ImageHelper.logo} alt="log" />
      </Box>
      {isMobile && (
        <IconButton sx={[headStyle.moreMenuBtn, { height: scale * 2.5 + "rem", width: scale * 2.5 + "rem" }]} onClick={handleClick}>
          {!Boolean(anchorEl) ? (
            <img src={ImageHelper.More} alt="menu" style={{ width: scale * 1.5 + "rem" }} />
          ) : (
            <Close sx={{ color: "steelblue", fontSize: scale * 1.75 + "rem" }} />
          )}
        </IconButton>
      )}
      {isMobile && (
        <Popper
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          sx={{ zIndex: 9999, backgroundColor: 'black' }}
        >
          <Box
            sx={{
              p: "1rem",
              width: "100vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "1rem",
              position: "relative",
              zIndex: 9999,
            }}
          >
            {MenuOptions.map((menu, index) => (
              <a
                key={index}
                href={`/#${menu.sectionId}`}
                style={{ color: ColorsHelper.skyBlueDark }}
                onClick={() => {
                  setAnchorEl(null);
                }}
              >
                <Button sx={headStyle.menuBtn} >
                  {menu.title}
                  {menu?.isDropdown && (
                    <img
                      loading="lazy"
                      src={ImageHelper.dropDown}
                      alt="dropdown"
                      style={{ marginLeft: "0.5rem" }}
                    />
                  )}
                </Button>
              </a>
            ))}
            <React.Suspense fallback={<></>}>
              <CustGradientBtn
                type={1}
                sx={{
                  mt: "1rem",
                  height: "40px !important",
                  "& .container": {
                    height: "40px !important",
                    lineHeight: "40px !important",
                  },
                }}
                title={"Book Your Free Demo Now"}
                onClick={() => {
                  window.open(SCHEDULE_REDIRECT_URL);
                }}
              />
            </React.Suspense>
          </Box>
        </Popper>
      )}
      {!isMobile && (
        <Box sx={headStyle.menuContainer}>
          {MenuOptions.map((menu, index) => (
            <a key={index} href={`/#${menu.sectionId}`}>
              <Button sx={headStyle.menuBtn}>
                {menu.title}
                {menu?.isDropdown && (
                  <img
                    loading="lazy"
                    src={ImageHelper.dropDown}
                    alt="dropdown"
                    style={{ marginLeft: "0.5rem" }}
                  />
                )}
              </Button>
            </a>
          ))}
        </Box>
      )}
      {!isMobile && (
        <React.Suspense fallback={<></>}>
          <CustGradientBtn
            type={1}
            title={"Book Your Free Demo Now"}
            onClick={() => {
              window.open(SCHEDULE_REDIRECT_URL);
            }}
          />
        </React.Suspense>
      )}
    </Box>
  );
};

export default Header;
