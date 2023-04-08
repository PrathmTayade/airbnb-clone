"use client";
import Image from "next/image";
import { FC } from "react";

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return <Image alt="" src={"/images/logo.png"} className="hidden md:block cursor-pointer" height={100} width={100}/>;
};
export default Logo;
