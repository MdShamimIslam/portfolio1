import React from "react";
import profile from "../../assets/shamim.jpg";
// import profile from '../../assets/shamim1.png';
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={profile} alt="profile-image" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title text-center lg:text-start">
            <span className="-mb-8 lg:-mb-0">I'm Shamim.</span> <br />
            Web Developer
          </h1>
          <p className="home__description">
            I'm a Bangladeshi based web developer & front-end developer focus on
            crafting clean & user-friendly experiences. I am passionate about
            building excellent software that improves the lives of those around
            me.
          </p>
          <Link to="/about" className="button">
            <div className="flex justify-center lg:justify-start">
            <div
              className="button justify-center flex items-center gap-3 rounded-full hover:bg-blue-500
              w-[180px] md:w-[200px] py-4 text-white"
            >
              More About Me{" "}
              <span className="button__icon hover:text-black">
                <FaArrowRight></FaArrowRight>
              </span>
            </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  );
};

export default Home;
