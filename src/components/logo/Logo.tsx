import { CSSProperties } from "react";

interface LogoProps {
  logoSrc: string;
  width: number;
  style?: CSSProperties;
}

const Logo = ({ logoSrc, width, style }: LogoProps) => {
  return <img style={{ ...style }} src={logoSrc} alt="Logo" width={width} />;
};

export default Logo;
