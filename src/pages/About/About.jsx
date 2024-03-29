import React from "react";
import Info from "../../components/Info";
import { FaDownload } from "react-icons/fa";
import CV from "../../assets/Shamim_resume.pdf";
import Stats from "../../components/Stats";
import "./About.css";
import Skills from "../../components/Skills";
import { resume } from "../../data";
import ResumeItem from "../../components/ResumeItem";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <main className="section container">
      <Helmet>
        <title>About | Md. Shamim Islam</title>
      </Helmet>
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>
        <div className="about__container grid ">
          <div className="flex justify-center ml-16 md:ml-0 lg:justify-start">
            <div className="about__info ">
              <h3 className="section__subtitle">Personal Information</h3>
              <ul className="info__list grid md:-ml-0 -ml-8">
                <Info></Info>
              </ul>

              <div
                className="button rounded-full
                w-[180px] md:w-[230px] py-3 md:ml-0 -ml-8 md:-mt-0 -mt-3  text-white "
              >
                <a
                  href={CV}
                  download=""
                  className=" flex items-center justify-center gap-3"
                >
                  Download Resume
                  <span className="">
                    <FaDownload></FaDownload>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="stats grid">
            <Stats></Stats>
          </div>
        </div>
      </section>
      <div className="separator"></div>
      <section className="skills">
        <h3 className="section__subtitle subtitle__center">My Skills</h3>
        <div className="skills__container grid">
          <Skills></Skills>
        </div>
      </section>
      <div className="separator"></div>
      <section className="resume">
        <h3 className="section__subtitle subtitle__center">
          Experience & Education
        </h3>
        <div className="resume__container grid md:ml-16 lg:ml-0">
          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === "experience") {
                return <ResumeItem key={val.id} {...val}></ResumeItem>;
              }
            })}
          </div>
          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === "education") {
                return <ResumeItem key={val.id} {...val}></ResumeItem>;
              }
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
