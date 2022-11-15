import React from "react";
import cavity from "../../assets/images/cavity.png";
import fluoride from "../../assets/images/fluoride.png";
import whitening from "../../assets/images/whitening.png";
import Service from "./Service/Service";
const Services = () => {
  const CardData = [
    {
      id: 1,
      title: "Cavity Filling",
      icon: cavity,
    },
    {
      id: 2,
      title: "Fluoride Treatment",
      icon: fluoride,
    },
    {
      id: 3,
      title: "Teeth Whitening",
      icon: whitening,
    },
  ];
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      {CardData.map((card) => (
        <Service key={card.id} card={card}></Service>
      ))}
    </div>
  );
};

export default Services;
