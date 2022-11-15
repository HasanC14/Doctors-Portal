import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import ApModal from "../ApModal/ApModal";
import ApOptions from "../ApOptions/ApOptions";

const AvAppointment = ({ selected }) => {
  const [options, setOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("Appointment.json")
      .then((res) => res.json())
      .then((data) => setOptions(data));
  }, []);
  return (
    <div className="flex justify-center">
      <div>
        <p className="text-secondary text-xl font-bold text-center">
          Available Appointments on {format(selected, "PP")}
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
          {options.map((option) => (
            <ApOptions
              option={option}
              selected={selected}
              setTreatment={setTreatment}
            ></ApOptions>
          ))}
        </div>
        {treatment && (
          <ApModal selected={selected} treatment={treatment}></ApModal>
        )}
      </div>
    </div>
  );
};

export default AvAppointment;
