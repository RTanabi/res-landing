import React from "react";

import PrifilePic from "../assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
          nesciunt nihil eligendi sed quos nemo alias dicta, quaerat temporibus,
          eveniet quibusdam illo id nisi dolorum cum, tempora laborum cumque
          magni blanditiis quisquam cupiditate aliquid corrupti.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={PrifilePic} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, esse
          repellat! Praesentium sequi quod laborum quaerat ullam ut, ipsa sint
          obcaecati numquam nam illum minima totam modi expedita tempore. Hic
          deserunt unde labore similique recusandae maxime accusantium corrupti
          ut sequi sed expedita nostrum, ducimus quae!
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
      </div>
    </div>
  );
};

export default Testimonial;
