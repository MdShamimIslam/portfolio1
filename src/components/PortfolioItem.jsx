import React, { useState } from "react";
import { MdFeaturedVideo } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FaServer, FaGithub } from "react-icons/fa";

const PortfolioItem = ({ title, img, live, front, back, features }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="portfolio__item">
      <img src={img} className="portfolio__img" alt="portfolio-image" />
      <div className="portfolio__hover" onClick={toggleModal}>
        {/* <h3 className="portfolio__title">{title}</h3> */}
        <p className="portfolio__title">Click Here</p>
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
            <h3 className="modal__title">Project Name : {title}</h3>
            <div className="flex md:text-lg justify-between underline  md:gap-24 gap-5 text-blue-700">
              <a
                href={front}
                className="flex hover:text-gray-600  items-center gap-1"
              >
                <FaGithub></FaGithub>Client code
              </a>
              {
                back ? <a
                href={back}
                className="flex hover:text-gray-600  items-center gap-1"
              >
                <FaGithub></FaGithub>Server code
              </a>
               : ''
              }
              
              <a
                href={live}
                className="flex hover:text-gray-600  items-center gap-1"
              >
                <CgWebsite />
                Live site{" "}
              </a>
            </div>
            <div className="mt-8">
              <h3 className="text-xl flex gap-2 items-center">
                <MdFeaturedVideo /> Features of project :
              </h3>
              <div className="mt-3">
                {features?.map((feature) => (
                  <div className="space-y-2" key={feature.id}>
                    <p>{feature.f1}</p>
                    <p>{feature.f2}</p>
                    <p>{feature.f3}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioItem;
