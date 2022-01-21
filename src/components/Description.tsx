import React from "react";

interface Props {
  bgColor?: string;
  title?: string;
  description?: string;
  className?: string;
  darkMode?: boolean;
  bgDark?: boolean;
}

const Description = ({
  bgColor,
  title,
  description,
  className,
  darkMode,
  bgDark=true,
}: Props) => {
  return !darkMode ? (
    <div className={`container w-100 bg-gray ${className ? className : ""}`}>
      <h1 className="text-center museo-500-reg py-4">{title}</h1>
      <p className="text-center droid-sans pb-4 mx-4 ">{description}</p>
    </div>
  ) : (
    <div className={`container w-100 ${bgDark ? 'bg-dark' : ""} down-arrow ${className ? className : ""}`}>
      <h1 className="text-center museo-500-reg text-white py-4">{title}</h1>
      <p className="text-center droid-sans text-white pb-4 mx-4 ">
        {description}
      </p>
    </div>
  );
};

export default Description;
