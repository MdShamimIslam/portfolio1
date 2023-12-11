import React, { useState } from "react";

const PortfolioItem = ({ title, details, img }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="portfolio__item">
      <img src={img} className="portfolio__img" alt="portfolio-image" />
      <div className="portfolio__hover" onClick={toggleModal}>
        <h3 className="portfolio__title">{title}</h3>
      </div>
      {modal && (
        <div className="portfolio__modal p-5">
          <div className="portfolio__modal-content mt-12">
            <button
              className="btn btn-circle btn-outline modal__close rounded-full bg-orange-500 md:mt-8 md:mr-16 mt-6 mr-10"
              onClick={toggleModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6  text-black hover:text-white lg:ml-3 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h3 className="modal__title">{title}</h3>
            <ul className="modal__list grid">
              {details.map(({ icon, title, desc }, index) => (
                <li className="modal__item" key={index}>
                  <span className="item__icon">{icon}</span>
                  <div>
                    <span className="item__title">{title}</span>
                    <span className="item__details">{desc}</span>
                  </div>
                </li>
              ))}
            </ul>
            <img src={img} alt="" className="modal__img rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioItem;
