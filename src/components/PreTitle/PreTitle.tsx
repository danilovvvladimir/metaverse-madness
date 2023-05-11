import { motion } from "framer-motion";
import React, { FC } from "react";
import { typingText, typingTextContainer } from "../../utils/motion";
import "./PreTitle.scss";
interface PreTitleProps {
  text: string;
  extraClassName?: string;
}

const PreTitle: FC<PreTitleProps> = ({ text, extraClassName }) => {
  return (
    <motion.p
      variants={typingTextContainer}
      // initial={"hidden"}
      // animate={"visible"}
      className={`pretitle ${extraClassName ? extraClassName : ""}`}>
      {"| "}
      {Array.from(text).map((letter, index) => (
        <motion.span
          variants={typingText}
          // initial={"hidden"}
          // animate={"visible"}
          key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default PreTitle;
