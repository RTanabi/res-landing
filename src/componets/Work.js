import React from "react";

import PickMeals from "../assets/pick-meals-image.png";
import ChooseMeals from "../assets/choose-image.png";
import DeliveryMeals from "../assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem tempore ipsum inventore distinctio veritatis maxime tempora, quod enim quisquam eligendi ratione doloremque aut iure eum earum labore ad perferendis qui!",
    },
    {
      image: ChooseMeals,
      title: "Chosse How Often",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem tempore ipsum inventore distinctio veritatis maxime tempora, quod enim quisquam eligendi ratione doloremque aut iure eum earum labore ad perferendis qui!",
    },
    {
      image: DeliveryMeals,
      title: "Fast Delivery",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem tempore ipsum inventore distinctio veritatis maxime tempora, quod enim quisquam eligendi ratione doloremque aut iure eum earum labore ad perferendis qui!",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Work</h1>
        <p className="primary-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
          nesciunt nihil eligendi sed quos nemo alias dicta, quaerat temporibus,
          eveniet quibusdam illo id nisi dolorum cum, tempora laborum cumque
          magni blanditiis quisquam cupiditate aliquid corrupti.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info">
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
