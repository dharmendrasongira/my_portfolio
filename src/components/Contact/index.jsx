/* eslint-disable react/no-unescaped-entities */
import "./Contact.css";
import Pyramid from "../../ui/Pyramid";
import { contactInfo } from "../../data";
import SocialHandles from "../../ui/SocialHandles";
import { BsFillSendFill } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <div className="section_wrapper">
        <div className="pyramid_container">
          <Pyramid />
        </div>
        <div className="contact_group">
          <div>
            <h3 className="title">
              Let's talk on your <span className="shine">great project</span> together
            </h3>
            <div className="contact_options">
              {contactInfo.map((contact, index) => (
                <article className="option" key={index}>
                  <div className="contact_icon">
                    <img src={contact.icon} alt="" />
                  </div>
                  <div className="contact_content">
                    <div>
                      <h3 className="name">{contact.name}</h3>
                      <p className="text_muted line_clam_1 value">
                        {contact.value}
                      </p>
                    </div>
                    <a href={contact.link} target="_blank" rel="noopener noreferrer" className="btn">
                      <span className="btn__shine text">Message</span>
                      <div className="icon" style={{ background: contact.color }}>
                        {contact.btnIcon}
                      </div>
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <SocialHandles />
          </div>
          <form action="">
            <input
              type="text"
              placeholder="Your full name"
              name="name"
              required
            />
            <input
              type="email"
              placeholder="Your email address"
              name="email"
              required
            />
            <textarea
              rows={7}
              placeholder="Your message"
              name="message"
              required
            />
            <button type="button" className="btn flex_center submit_btn">
              <div className="icon"><BsFillSendFill /></div>
              <span>Send Now</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
