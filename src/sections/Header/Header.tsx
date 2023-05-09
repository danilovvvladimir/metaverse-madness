import React, { useState } from "react";
import { motion } from "framer-motion";
import logoUrl from "../../assets/images/logo.svg";

import { navVariants } from "../../utils/motion";
import { menuItems } from "../../data/constants";

import "./Header.scss";
const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <header className="header">
      <div className="container">
        <motion.nav
          variants={navVariants}
          initial={"hidden"}
          animate={"visible"}
          // whileInView="visible"
          className="menu">
          <a href="#hero" className="logo">
            <img src={logoUrl} alt="logo" className="logo__image" />
          </a>
          <ul className="menu__list">
            {menuItems.map((menuItem, index) => (
              <li
                key={menuItem.id}
                className="menu__list-item"
                onClick={() => setActiveIndex(index)}>
                <a
                  href={`#${menuItem.title.toLowerCase()}`}
                  className="menu__list-item-link">
                  {activeIndex === index && <ActiveLine />}
                  {menuItem.title}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </header>
  );
};

const ActiveLine = () => {
  return (
    <motion.div
      className="active-line"
      layoutId="activeItem"
      transition={{ duration: 0.5, type: "tween" }}
    />
  );
};

export default Header;
