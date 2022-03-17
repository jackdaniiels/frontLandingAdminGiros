import { CardInterface } from "../interfaces/card.interface";

export const Card2 = ({
  idx,
  img,
  description,
  darkMode = true,
  server = "",
}: CardInterface) => {
  return (
    <div key={idx} className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
      <div className="d-flex justify-content-center">
        <img src={`${server}` + img || ""} alt="" />
      </div>
      <p className={`text-center ${darkMode ? 'text-white' : ''} px-5 mt-4`}>{description}</p>
    </div>
  );
};
