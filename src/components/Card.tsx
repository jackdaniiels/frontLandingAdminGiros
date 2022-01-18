import { externalLink } from "../helpers/externalLink";
import { CardInterface } from "../interfaces/card.interface";

export const Card = ({
  idx,
  img,
  description,
  link = "",
  button,
  target = "",
}: CardInterface) => {
  return (
    <div key={idx} className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
      <div className="d-flex justify-content-center">
        <img src={`http://localhost:1337` + img || ""} alt="" />
      </div>
      <p className="text-center mt-4">{description}</p>
      <div className="d-flex justify-content-center mb-5">
        <button
          disabled={target === "_none" ? true : false}
          className="btn-custom"
          onClick={() => externalLink(link, target)}
        >
          {button}
        </button>
      </div>
    </div>
  );
};
