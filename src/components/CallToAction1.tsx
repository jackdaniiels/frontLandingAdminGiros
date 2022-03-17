import { CallToActionInterface } from "../interfaces/callToAction.interface";
import { externalLink } from "../helpers/externalLink";
export const CallToAction1 = ({
  data,
  title,
  description,
  button,
  img,
  link = "",
  target = "",
  darkMode = false,
  showButton = true,
  server = ''
}: CallToActionInterface) => {
  return (
    <div className="center-content my-5">
      <div className="row container w-100">
        <div className="col-xl-6 center-content">
          <img
            className="img-fluid"
            src={`${server}` + img || ""}
            alt=""
          />
        </div>
        <div className="col-xl-6">
          <h1 className={`museo-500-reg center-on-mobile-text pt-4 ${darkMode ? 'text-white' : ''}`}>{title}</h1>
          <p className={`droid-sans center-on-mobile-text pb-2 ${darkMode ? 'text-white' : ''}`}>
            {description}
          </p>
          {showButton && (
            <div className="center-on-mobile">
              <button
                disabled={target === "_none" ? true : false}
                className="btn-custom mb-2"
                onClick={() => externalLink(link, target)}
              >
                {button}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
