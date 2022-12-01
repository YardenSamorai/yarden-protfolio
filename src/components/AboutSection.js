import React from "react";
import home1 from "../img/home1.png";
//Styled
import styled from "styled-components";
//Import Framer Motion
import { motion } from "framer-motion";

import { About, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  };

  const container = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: {
        duration: 0.75,
        ease: "easeOut",
        staggerChildren: 1,
        when: "afterChildren",
      },
    },
  };

  return (
    <About className="about">
      <Description className="description">
        <motion.div
          className="title"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <Hide className="hide">
            <motion.h2 variants={titleAnim} initial="hidden" animate="show">
              Work to make
            </motion.h2>
          </Hide>
          <Hide className="hide">
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come{" "}
            </motion.h2>
          </Hide>
          <Hide className="hide">
            <motion.h2 variants={titleAnim}>true .</motion.h2>
          </Hide>
        </motion.div>
        <p>Contact me for any developer work</p>
        <button>Contact Me</button>
      </Description>
      <Image className="image">
        <img src={home1} alt="guy with a camera" />
      </Image>
    </About>
  );
};

export default AboutSection;
