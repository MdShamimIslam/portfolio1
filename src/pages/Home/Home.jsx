import React from "react";
import profile from "../../assets/shamim.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./Home.css";
import { useTypewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet-async";
const Home = () => {
  const [text] = useTypewriter({
    words: [
      "Frontend Developer.",
      "Backend Developer.",
      "Full-stack Developer.",
    ],
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 60,
    delaySpeed: 3000,
  });
  return (
    <section className="home section grid">
      <Helmet>
        <title>Home | Md. Shamim Islam</title>
      </Helmet>
      <img src={profile} alt="profile-image" className="home__img" />
      <div className="home__content ">
        <div className="home__data">
          <h1 className="home__title text-center lg:text-start">
            <span className="-mb-8 lg:-mb-0">I'm Shamim.</span> <br />
            <p className="lg:text-5xl md:text-4xl text-3xl">{text}</p>
          </h1>
          <p className="home__description">
            I'm a Bangladeshi based web developer & front-end developer focus on
            crafting clean & user-friendly experiences. I am passionate about
            building excellent software that improves the lives of those around
            me.
          </p>

          <div className="flex justify-center lg:justify-start ">
            <Link to="/about">
              <div
                className="button justify-center flex items-center gap-3 rounded-full hover:bg-blue-500
              w-[180px] md:w-[200px] py-4 text-white -mt-6 "
              >
                More About Me
                <FaArrowRight></FaArrowRight>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  );
};

export default Home;
