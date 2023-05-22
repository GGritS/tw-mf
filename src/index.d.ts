declare module "@iconscout/react-unicons" {
  import { SVGProps } from "react";

  export type IconProps = {
    color?: string;
    size?: string | number;
  } & SVGProps<SVGElement>;

  export type Icon = (props: IconProps) => JSX.Element;

  export const UilMoon: Icon;
  export const UilMoonEclipse: Icon;
  export const UilMoonset: Icon;
  export const UilSun: Icon;
  export const UilSunset: Icon;
  export const UilMultiply: Icon;
}
