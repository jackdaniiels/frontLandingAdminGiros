import { externalLink } from "../helpers/externalLink";
import { ButtonInterface } from "../interfaces/button.interface";

export const Button = ({ button, link = "", target = "" }: ButtonInterface) => {
  return (
    <div className="center-on-mobile">
      <button
        disabled={target === "_none" ? true : false}
        className="btn-custom mb-2"
        onClick={() => externalLink(link, target)}
      >
        {button}
      </button>
    </div>
  );
};
