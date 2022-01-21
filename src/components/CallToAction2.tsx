import { CallToActionInterface } from "../interfaces/callToAction.interface";
import { externalLink } from "../helpers/externalLink";
export const CallToAction2 = ({
  data,
  title,
  description,
  button,
  img,
  link = "",
  target = "",
  darkMode = false,
  showButton = true,
}: CallToActionInterface) => {
  return (
    <div className="center-content my-5">
      <div className="row container w-100">
        <div className="col-xl-6 order-sm-2 order-xs-2">
          <h1
            className={`museo-500-reg center-on-mobile-text ${
              darkMode ? "text-white" : ""
            } pt-4`}
          >
            {title}
          </h1>
          <p
            className={`droid-sans center-on-mobile-text ${
              darkMode ? "text-white" : ""
            } pb-2`}
          >
            {description}
          </p>
          {showButton && (
            <div className="center-on-mobile">
              <button
                disabled={target === "_none" ? true : false}
                className="btn-custom mb-4"
                onClick={() => externalLink(link, target)}
              >
                {button}
              </button>
            </div>
          )}
        </div>
        <div className="col-xl-6 center-content order-sm-1 order-xs-1">
          <img
            className="img-fluid"
            src={`http://localhost:1337` + img || ""}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
