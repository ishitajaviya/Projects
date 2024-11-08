import styled from "styled-components";
import { Suspense, useEffect, useState } from "react";

type StyledSVGProps = {
  src: any;
  color?: string;
  id?: string;
  dataTarget?: string;
  fill?: string;
  height?: string;
  width?: string;
  onClick?: any;
};

const SvgImage = (props: StyledSVGProps) => {
  const { src, color, height, width, id, dataTarget, onClick } = props;
  const [SvgIcon, setSvgIcon] = useState<any>(null);

  useEffect(() => {
    const importSvg = async () => {
      try {
        const { ReactComponent } = await src;
        setSvgIcon(ReactComponent);
      } catch (error) {
        console.error("Error loading SVG:", error);
      }
    };

    importSvg();
  }, [src]);

  return (
    <Suspense>
      <StyledSVG
        id={id}
        onClick={onClick}
        data-target={dataTarget}
        color={color}
        fill={props?.fill}
        height={height}
        width={width}
      >
        {SvgIcon && <SvgIcon />}
      </StyledSVG>
    </Suspense>
  );
};

const StyledSVG = styled.svg`
  & path {
    stroke: ${(props) => props.color};
    fill: ${(props) => props.fill};
    height: ${(props) => props.height};
    width: ${(props) => props.width};
  }
`;

export default SvgImage;
