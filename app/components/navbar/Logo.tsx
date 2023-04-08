"use client";
import Image from "next/image";
import { FC } from "react";

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return <Image alt="Airbnb logo" src={"/images/logo.png"} className="hidden md:block cursor-pointer w-auto " height={100} width={100}/>;
};
export default Logo;
