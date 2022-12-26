import React from "react";
import "./About.css";
import MyImage from "../../images/Myimg.jpeg";
import Hobbies from "./Hobbies";
import { motion as m } from "framer-motion";

const About = () => {
  const about_data = {
    offscreen: { opacity: 0 },
    onscreen: {
      opacity: 1,
      transition: { duration: 0.2 },
    },
    exit: {
      opacity: 0,
    },
  };

  const about_title = {
    offscreen: { opacity: 0 },
    onscreen: { opacity: 1, transition: { duration: 0.2 } },
    exit: {
      opacity: 0,
    },
  };

  const my_flex = {
    offscreen: {
      scale: 0.1,
      opacity: 0,
    },
    onscreen: {
      scale: 1,
      transition: { duration: 1, once: false },
      opacity: 1,
    },
    exit: {
      scale: 1,
      opacity: 0,
    },
  };

  return (
    <m.div
      className="about container section"
      id="about"
      initial={"offscreen"}
      whileInView={"onscreen"}

      exit={"exit"}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <m.h2
        variants={about_title}
        className="about_title"
      >
        About Me
      </m.h2>
      {/* making it grid */}
      <div className="about_wrapper grid">
        <div className="about_img">
          <m.img
            src={MyImage}
            alt=""
            variants={about_title}
          />
        </div>

        {/* making it grid */}
        <m.div
          variants={about_data}
          className="about_data grid"
        >
          <div className="about_info">
            <p className="about_description">
            Computer Science Engineering At SRMIST Ramapuram Chennai. I am a passionate learner and I am trying to learn new things everyday.
            Computer Science Engineering At SRMIST Ramapuram Chennai. I am a passionate learner and I am trying to learn new things everyday
            Computer Science Engineering At SRMIST Ramapuram Chennai. I am a passionate learner and I am trying to learn new things everyday
            </p>
            <m.button variants={my_flex}    
 className="about_cv_button">
              <a href="/">Download CV</a>
            </m.button>
          </div>

          <div className="about_skills grid">
            <div className="skills_data">
              {/* skill title and digit */}
              <div className="skills_title">
                <h3 className="skills_name">Development</h3>
                <span className="skills_number">80%</span>
              </div>
              {/* skill bar */}
              <div className="skills_bar">
                <span className="skills_percentage_bar Development"></span>
              </div>
            </div>
            <div className="skills_data">
              {/* skill title and digit */}
              <div className="skills_title">
                <h3 className="skills_name">UI/UX</h3>
                <span className="skills_number">60%</span>
              </div>
              {/* skill bar */}
              <div className="skills_bar">
                <span className="skills_percentage_bar UI_UX"></span>
              </div>
            </div>
            <div className="skills_data">
              {/* skill title and digit */}
              <div className="skills_title">
                <h3 className="skills_name">Programming</h3>
                <span className="skills_number">70%</span>
              </div>
              {/* skill bar */}
              <div className="skills_bar">
                <span className="skills_percentage_bar Programming"></span>
              </div>
            </div>
          
            <m.div
              variants={my_flex}
              className="myflex"
            >
              <m.h3 variants={my_flex} whileInView={"onscreen"}>
                My Flex
              </m.h3>
              <m.ul
                variants={my_flex}
                className="flex_ul"
              >
                <li className="flex_list">abcdefghijklmnopqrst</li>
                <li className="flex_list">abcdefghijklmnopqrst</li>{" "}
                <li className="flex_list">abcdefghijklmnopqrst</li>{" "}
                <li className="flex_list">abcdefghijklmnopqrst</li>
              </m.ul>
            </m.div>
          </div>
        </m.div>
      </div>
      <Hobbies />
    </m.div>
  );
};

export default About;