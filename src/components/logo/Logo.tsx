import { CSSProperties } from 'react';

interface LogoProps {
  logoSrc: string;
  width: number;
  style?: CSSProperties;
}

const Logo = ({ logoSrc, width, style }: LogoProps) => {
  return (
    <img style={{ ...style }} src={logoSrc} alt="Documated" width={width} />
  );
};

export default Logo;
