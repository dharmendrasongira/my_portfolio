import "./SocialHandles.css";
import { socialHandles } from "../../data";

const SocialHandles = () => {
  return (
    <div className="social_handles_container">
      {socialHandles.map((media, index) => (
        <a
          href={media.link}
          target="_blank"
          rel="noopener noreferrer" /* ✅ Security fix */
          className="icon_container social_handle"
          key={index}
        >
          <span className="tooltip">{media.name}</span>
          
          {/* ✅ Supports both image URLs and React icon components */}
          {typeof media.icon === "string" ? (
            <img src={media.icon} alt={media.name} />
          ) : (
            media.icon /* If media.icon is a component, render it directly */
          )}
        </a>
      ))}
    </div>
  );
};

export default SocialHandles;
