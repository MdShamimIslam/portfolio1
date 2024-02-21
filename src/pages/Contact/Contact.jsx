import React, { useRef } from "react";
import "./Contact.css";
import { FaFacebook, FaEnvelopeOpen, FaPhoneSquareAlt } from "react-icons/fa";
import { FaLinkedin,FaGithub } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_t1bkfbw", "template_q59aluq", form.current, {
        publicKey: "i-ATNt_8-qNQ_pwpy",
      })
      .then(
        () => {
          toast.success("Message send successfully");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="contact section">
      <Helmet>
        <title>Contact | Md. Shamim Islam</title>
      </Helmet>
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="md:w-[500px] w-[300px] mx-auto">
          <div className="contact__data">
            <h3 className="contact__title">Don't be Shy !</h3>
            <p className="contact__description">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              vision.
            </p>
            <div className="contact__info">
              <div className="info__item">
                <FaEnvelopeOpen className="info__icon"></FaEnvelopeOpen>
                <div>
                  <span className="info__title">Mail me</span>
                  <h4 className="info__desc">shamim401897@gmail.com</h4>
                </div>
              </div>
              <div className="info__item">
                <FaPhoneSquareAlt className="info__icon"></FaPhoneSquareAlt>
                <div>
                  <span className="info__title">Call me</span>
                  <h4 className="info__desc">01571529918</h4>
                </div>
              </div>
              <div className="contact__socials">
                <a href="https://www.facebook.com/profile.php?id=100070973862158&mibextid=ZbWKwL" className="contact__social-link">
                  <FaFacebook className="m-3"></FaFacebook>
                </a>
                <a href="https://www.linkedin.com/in/mdshamimslam1897" className="contact__social-link">
                <FaLinkedin className="m-3"/>
                </a>
                <a href="https://github.com/MdShamimIslam" className="contact__social-link">
                <FaGithub className="m-3"/>
                </a>
              </div>
            </div>
          </div>
        </div>

        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                className="form__control"
              />
            </div>
            <div className="form__input-div">
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                className="form__control"
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                name="subject"
                placeholder="Your Subject"
                className="form__control"
              />
            </div>
          </div>
          <div className="form__input-div lg:-mt-3">
            <textarea
              type="text"
              name="message"
              placeholder="Your Message"
              className="form__control textarea"
            />
          </div>
          <button
            className=" button -mt-3 justify-center flex items-center gap-3 rounded-full hover:bg-blue-500
              w-[180px] md:w-[200px] py-3 text-white"
          >
            Send Message
            <span className="contact__button-icon">
              <FiSend></FiSend>
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
