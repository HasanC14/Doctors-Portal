import React from "react";
import ApModal from "../ApModal/ApModal";

const ApOptions = ({ option, selected, setTreatment }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{option.name}</h2>
        <p>{option.slots.length > 0 ? option.slots[0] : "Try Another day"}</p>
        <p>
          {option.slots.length} {option.slots.length > 1 ? "spaces" : "space"}{" "}
          Available
        </p>

        <label
          disabled={option.slots.length === 0}
          htmlFor="my-modal-3"
          className="btn btn-primary bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary"
          onClick={(setTreatment = option)}
        >
          Book Appointment
        </label>
      </div>
    </div>
  );
};

export default ApOptions;
