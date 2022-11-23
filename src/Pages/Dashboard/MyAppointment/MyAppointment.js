import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../Context/AuthProvider";

const MyAppointment = () => {
  const { User } = useContext(AuthContext);
  const { data: bookings = [] } = useQuery({
    queryKey: ["appointments", User?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/UserAppointment?email=${User?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="max-w-7xl mt-5 ">
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>SL</th>
                <th>Treatment</th>
                <th>Time</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((book, index) => (
                <tr className="hover" key={book._id}>
                  <th>{index + 1}</th>
                  <td>{book.treatment}</td>
                  <td>{book.slot}</td>
                  <td>{book.appointmentDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAppointment;
