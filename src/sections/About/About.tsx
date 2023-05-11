import React from "react";
import PreTitle from "../../components/PreTitle/PreTitle";
import { motion } from "framer-motion";
import gradientRightIMG from "../../assets/images/decorations/about-gradient-right.svg";
import gradientLeftIMG from "../../assets/images/decorations/about-gradient-left.svg";

import "./About.scss";
import { navVariants, staggerContainer, textVariant } from "../../utils/motion";

const About = () => {
  return (
    <section className="about">
      <img
        src={gradientRightIMG}
        alt="gradient"
        className="about__gradient--right"
      />
      <img
        src={gradientLeftIMG}
        alt="gradient"
        className="about__gradient--left"
      />
      <div className="container">
        <div className="about__wrapper">
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}>
            <PreTitle text="About Metaverus" extraClassName="about__pretitle" />
          </motion.div>
          <motion.p
            variants={navVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            className="about__description">
            <span>Metaverse</span> is a new thing in the future, where you can
            enjoy the virtual world by feeling like it's really real, you can
            feel what you feel in this metaverse world, because this is really
            the <span>madness of the metaverse</span> of today, using only{" "}
            <span>VR</span> devices you can easily explore the metaverse world
            you want, turn your dreams into reality. Let's <span>explore</span>{" "}
            the madness of the metaverse by scrolling down
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
