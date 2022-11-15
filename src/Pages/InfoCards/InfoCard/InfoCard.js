import React from "react";

const InfoCard = ({ card }) => {
  const { name, bgClass, description, icon } = card;
  return (
    <div>
      <div className={`card card-side ${bgClass} shadow-xl p-5 text-white`}>
        <figure>
          <img src={icon} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
