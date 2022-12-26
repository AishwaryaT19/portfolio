import { motion as m } from "framer-motion";
import React, { useState } from "react";
import ProjectData from "./ProjectData";
import "./Projects.css";

const Project = () => {
  const [item, setItem] = useState(ProjectData);

  const filterItem = (catetoryItem) => {
    const updatedItem = ProjectData.filter((currItem) => {
      return currItem.category === catetoryItem;
    });
    setItem(updatedItem);
  };

  const heading = {
    offscreen: {opacity:0 },
    onscreen: { opacity:1, transition: { duration: .2} },
    exit:{
      opacity:0 
    }
  };


  return (
    <m.div
      className="project container section"
      id="projects"
      initial={"offscreen"}
      whileInView={"onscreen"}
      exit={"exit"}
      viewport={{once:false,amount:0.3}}
      transition={{ staggerChildren: 0.2 }}
    >
      <m.h2 className="project_heading" variants={heading}   
 >
        Projects
      </m.h2>

      <m.div className="project_type" variants={heading}       

>
        <span className="project_item" onClick={() => setItem(ProjectData)}>
          All
        </span>
        <span className="project_item" onClick={() => filterItem("Frontend")}>
          Frontend
        </span>
        <span className="project_item" onClick={() => filterItem("Blockchain")}>
          Blockchain
        </span>
      </m.div>

      {/* grid */}
      <m.div className="project_container"     variants={heading}

>
        {/* here we are loading components accordiing to data so using items.map, but in exprience we made components then sent items to it so we directly did data.map and sent props not used it directly aas we had made card for it so hav to sent props to it*/}
        {item.map((value) => {
          const { id, image, title, category } = value;

          return (
            <div className="project_card" key={id}>
              <img src={image} alt="" className="project_img" />
              <div className="project_mask">
                <span className="project_category">{category}</span>
                <h3 className="project_title">{title}</h3>
                {/* put the website link here */}
                <a href="#home" className="project_button">
                  <i className="project_button_icon">hi</i>
                </a>
              </div>
            </div>
          );
        })}
      </m.div>
    </m.div>
  );
};

export default Project;
