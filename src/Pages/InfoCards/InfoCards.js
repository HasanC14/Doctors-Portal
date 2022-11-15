import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import InfoCard from "./InfoCard/InfoCard";
const InfoCards = () => {
  const CardData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Open 9.00 am to 5.00pm",
      icon: clock,
      bgClass: "bg-primary bg-gradient-to-r from-primary to-secondary ",
    },
    {
      id: 2,
      name: "Visit our location",
      description: "Mirpur-14, Dhaka-1206",
      icon: marker,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      name: "Contact us now",
      description: "+880 1839934433",
      icon: phone,
      bgClass: "bg-primary bg-gradient-to-r from-secondary to-primary",
    },
  ];

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      {CardData.map((card) => (
        <InfoCard key={card.id} card={card}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
