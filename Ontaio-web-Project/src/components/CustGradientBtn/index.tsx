import React, { useState } from "react";
import { Button } from "@mui/material";
import ImageHelper from "helpers/ImageHelper";
import "./style.scss";
import SvgImage from "components/SvgImage";
import ColorsHelper from "helpers/ColorsHelper";

type BtnProps = {
  type: number;
  title: string;
  sx?: any;
  onClick: () => void;
  hideArrow?: boolean;
};
const CustGradientBtn = (props: BtnProps) => {
  const { type, title, onClick } = props;
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      {type === 1 && (
        <Button
          className="button"
          sx={props?.sx}
          onClick={onClick}
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <div className="container">
            <div className="label-up"><span >{title}</span></div>
            <div className="label-up"><span >{title}</span></div>
          </div>
          <SvgImage
            src={import("assets/icons/rightArrow.svg")}
            color={isHover ? ColorsHelper.skyBlue1 : ColorsHelper.white}
            fill={isHover ? ColorsHelper.skyBlue1 : ColorsHelper.white}
            height={"24px"}
            width={"24px"}
          />
        </Button>
      )}
      {type === 2 && (
        <Button
          className="button button2"
          sx={props?.sx}
          onClick={onClick}
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <div className="container">
            <span className="label-up">{title}</span>
            <span className="label-up">{title}</span>
          </div>

          <SvgImage
            src={import("assets/icons/rightArrow.svg")}
            color={ColorsHelper.black}
            fill={ColorsHelper.black}
            height={"24px"}
            width={"24px"}
          />
        </Button>
      )}
      {type === 3 && (
        <Button
          className="button button3"
          sx={props?.sx}
          onClick={onClick}
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <div className="container">
            <span className="label-up">{title}</span>
            <span className="label-up">{title}</span>
          </div>

          {!props?.hideArrow && (
            <SvgImage
              src={import("assets/icons/rightArrow.svg")}
              color={isHover ? ColorsHelper.skyBlue1 : ColorsHelper.white}
              fill={isHover ? ColorsHelper.skyBlue1 : ColorsHelper.white}
              height={"24px"}
              width={"24px"}
            />
          )}
        </Button>
      )}
    </>
  );
};

export default CustGradientBtn;
