import React, { ReactElement } from "react";

interface Props {
  children?: ReactElement | ReactElement[];
  backgroundImg?: string;
}

export const BgImg = ({ children, backgroundImg }: Props) => {
  return (
    <div
      className="fullscreen-img-2"
      style={{
        backgroundImage: `url(http://localhost:1337${backgroundImg})`,
      }}
    >
      {children}
    </div>
  );
};
