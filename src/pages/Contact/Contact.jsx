import React from "react";
import "./Contact.css";
import { FaFacebook, FaEnvelopeOpen, FaPhoneSquareAlt } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="contact section">
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
                <h4 className="info__desc">0173874069</h4>
              </div>
            </div>
            <div className="contact__socials">
              <a href="https://facebook.com" className="contact__social-link">
                <FaFacebook className="m-3"></FaFacebook>
              </a>
              <a href="https://facebook.com" className="contact__social-link">
                <FaFacebook className="m-3"></FaFacebook>
              </a>
              <a href="https://facebook.com" className="contact__social-link">
                <FaFacebook className="m-3"></FaFacebook>
              </a>
              <a href="https://facebook.com" className="contact__social-link">
                <FaFacebook className="m-3"></FaFacebook>
              </a>
            </div>
          </div>
        </div>
        </div>

        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form__control"
              />
            </div>
            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form__control"
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form__control"
              />
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              type="text"
              placeholder="Your Message"
              className="form__control textarea"
            />
          </div>
          <button className=" button justify-center flex items-center gap-3 rounded-full hover:bg-blue-500
              w-[180px] md:w-[200px] py-3 text-white">
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
