import React from "react";

interface Props {
  bgColor?: string;
  title?: string;
  description?: string;
}

const Description = ({ bgColor, title, description }: Props) => {
  console.log("Description", bgColor);
  return (
    <div className={`container w-100 ${bgColor ? bgColor : "bg-gray"}`}>
      <h1 className="text-center museo-500-reg py-4">{title}</h1>
      <p className="text-center droid-sans pb-4 mx-4 ">{description}</p>
    </div>
  );
};

export default Description;
