import React from "react";

import { iconList, iconsName } from "./icons";

import {ReactComponent as InfoIcon} from "../../assets/icons/info.svg";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: iconsName;
}

export default function Icon({
  icon,
  width = 18,
  height = 18,
  ...rest
}: IconProps) {

  function CustomIcon({...rest}: React.SVGProps<SVGSVGElement>)  {
    const SvgFile = iconList.find(item => item.name == icon)?.icon;

    if (SvgFile) return <SvgFile {...rest} />;

    return <InfoIcon {...rest} />;
  }

  return (
    <CustomIcon
      width={width}
      height={height}
      {...rest}
    />
  )
}
