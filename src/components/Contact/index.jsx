/* eslint-disable react/no-unescaped-entities */
import "./Contact.css";
import Pyramid from "../../ui/Pyramid";
import { contactInfo } from "../../data";
import SocialHandles from "../../ui/SocialHandles";
import { BsFillSendFill } from "react-icons/bs";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({
        state: "error",
        message: "Email service is not configured yet. Please use email or WhatsApp above.",
      });
      return;
    }

    setStatus({ state: "sending", message: "" });

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      formRef.current.reset();
      setStatus({ state: "success", message: "Thanks! Your message has been sent." });
    } catch (error) {
      setStatus({
        state: "error",
        message: "Something went wrong. Please try again or reach out on WhatsApp.",
      });
    }
  };

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
          <form ref={formRef} onSubmit={handleSubmit}>
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
            <button
              type="submit"
              className="btn flex_center submit_btn"
              disabled={status.state === "sending"}
            >
              <div className="icon"><BsFillSendFill /></div>
              <span>{status.state === "sending" ? "Sending..." : "Send Now"}</span>
            </button>
            {status.message && (
              <p className={`form_status ${status.state}`}>{status.message}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
