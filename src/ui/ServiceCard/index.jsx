/* eslint-disable react/prop-types */
import "./ServiceCard.css";
import SocialHandles from "../SocialHandles";

const ServiceCard = ({ title, description, icon, color, colorRGB }) => {
  return (
    <div
      className="blur_overlay flex service_card"
      style={{ "--color-primary": color, "--color-primary-rgb": colorRGB }}
    >
      <div className="service_card-top">
        <div className="blur_overlay ball ball1"></div>
        <div className="blur_overlay ball ball2"></div>
        <div className="blur_overlay ball ball3"></div>
        <div className="blur_overlay ball ball4"></div>
        <div className="blur_overlay ball ball5"></div>
        <div className="blur_overlay ball ball6 flex_center">{icon}</div>
      </div>
      <div className="service_card-middle">
        <h2 className="title">
          <span className="g-text">{title}</span>
        </h2>
        <p className="description text_muted">{description}</p>
      </div>
      <div className="service_card-bottom">
        <SocialHandles />
      </div>
    </div>
  );
};

export default ServiceCard;
