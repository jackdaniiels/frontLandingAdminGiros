import React, { ReactElement } from "react";

interface Props {
  children?: ReactElement | ReactElement[];
  backgroundImg?: string;
  server: string
}

export const BgImg = ({ children, backgroundImg, server }: Props) => {
  // console.log("BgImg", backgroundImg);
  return (
    <div
      className="fullscreen-img-2 bg-dark"
      style={{
        backgroundImage: `url(${server}${backgroundImg})`,
      }}
    >
      {children}
    </div>
  );
};
