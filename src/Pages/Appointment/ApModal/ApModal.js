import { format } from "date-fns";
import React from "react";

const ApModal = ({ treatment, selected }) => {
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{treatment.name}</h3>
          <form className="grid grid-cols-1 gap-4 mt-5 ">
            <input
              type="text"
              placeholder={format(selected, "PP")}
              className="input input-bordered w-full "
              disabled
            />

            <select className="select select-bordered w-full ">
              <option disabled defaultValue>
                Pick your Time
              </option>
              {treatment.slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input type="text" className="input input-bordered w-full" />
            <input type="text" className="input input-bordered w-full" />
            <input type="text" className="input input-bordered w-full" />
            <button
              type="submit"
              className="btn btn-primary bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ApModal;
