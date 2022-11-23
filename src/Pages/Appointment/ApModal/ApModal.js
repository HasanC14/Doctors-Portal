import { format } from "date-fns";
import React, { useContext } from "react";
import swal from "sweetalert";
import { AuthContext } from "../../../Context/AuthProvider";

const ApModal = ({ treatment, selected, refetch }) => {
  const { User } = useContext(AuthContext);
  const date = format(selected, "PP");
  const HandleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const booking = {
      appointmentDate: date,
      treatment: treatment.name,
      patient: name,
      slot,
      email,
      phone,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          swal({
            title: "Booking Confirmed",
            button: "OK",
          });
          form.reset();
          refetch();
        } else {
          swal({
            title: `${data.message}`,
            button: "OK",
          });
        }
      });
  };

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
          <form
            className="grid grid-cols-1 gap-4 mt-5 "
            onSubmit={HandleSubmit}
          >
            <input
              type="text"
              placeholder={format(selected, "PP")}
              className="input input-bordered w-full "
              disabled
            />

            <select className="select select-bordered w-full " name="slot">
              <option disabled defaultValue>
                Pick your Time
              </option>
              {treatment.slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="email"
              className="input input-bordered w-full"
              defaultValue={User?.email}
            />
            <input
              type="text"
              name="name"
              className="input input-bordered w-full"
              defaultValue={User?.displayName}
            />
            <input
              type="text"
              placeholder="Phone"
              className="input input-bordered w-full"
              name="phone"
            />
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
