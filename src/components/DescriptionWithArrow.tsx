import React from "react";

export const DescriptionWithArrow = ({ bgColor }: { bgColor?: string }) => {
  return (
    <div className={`container w-100 ${bgColor ? bgColor : "bg-gray"}`}>
      <h1 className="text-center museo-500-reg py-4">
        Lorem ipsum dolor sit amet
      </h1>
      <p className="text-center droid-sans pb-4 mx-4 ">
        consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
        laoreet dolore magna aliquam erat volutpat.
      </p>
    </div>
  );
};
