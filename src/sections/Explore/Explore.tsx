import React from "react";
import PreTitle from "../../components/PreTitle/PreTitle";
import "./Explore.scss";
const Explore = () => {
  return (
    <section className="explore">
      <div className="container">
        <div className="explore__wrapper">
          <PreTitle text="The World" extraClassName="explore__pretitle" />
          <h2 className="title explore__title">
            Choose the world you want to explore
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Explore;
