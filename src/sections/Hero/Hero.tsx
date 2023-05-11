import React from "react";
import { motion } from "framer-motion";
import "./Hero.scss";
import triggerImage from "../../assets/images/trigger.svg";
// import redditIMG from "../../assets/images/icons/reddit.svg";
// import twitterIMG from "../../assets/images/icons/twitter.svg";
// import discordIMG from "../../assets/images/icons/discord.svg";
// import instagramIMG from "../../assets/images/icons/instagram.svg";
import heroBg from "../../assets/images/hero/hero-bg.png";
import { textVariant } from "../../utils/motion";
const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__gradient"></div>
      <div className="container">
        <div className="hero__titlebox">
          <motion.h1
            variants={textVariant(0.8)}
            initial={"hidden"}
            animate={"visible"}
            className="hero__title">
            Metaverse
          </motion.h1>
          <motion.div
            variants={textVariant(1)}
            initial={"hidden"}
            animate={"visible"}
            className="hero__titlebox-bottom">
            <h1 className="hero__title">Ma</h1>
            <div className="hero__title--accent" />
            <h1 className="hero__title">Ness</h1>
          </motion.div>
          <div className="hero__imagebox">
            <img src={heroBg} alt="heroimage" className="hero__image" />
          </div>
        </div>
        <button className="hero__trigger">
          <img
            src={triggerImage}
            alt="triggerImage"
            className="hero__trigger-image"
          />
        </button>
      </div>
    </section>
  );
};

export default Hero;
