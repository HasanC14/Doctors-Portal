import { useQuery } from "@tanstack/react-query";

import { format } from "date-fns";
import React, { useState } from "react";
import ApModal from "../ApModal/ApModal";
import ApOptions from "../ApOptions/ApOptions";

const AvAppointment = ({ selected }) => {
  const date = format(selected, "PP");
  const [treatment, setTreatment] = useState(null);
  const { data: options = [], refetch } = useQuery({
    queryKey: ["appointments", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appointments?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="flex justify-center">
      <div>
        <p className="text-secondary text-xl font-bold text-center">
          Available Appointments on {date}
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
          {options.map((option, index) => (
            <ApOptions
              key={option.index}
              option={option}
              selected={selected}
              setTreatment={setTreatment}
            ></ApOptions>
          ))}
        </div>
        {treatment && (
          <ApModal
            refetch={refetch}
            selected={selected}
            treatment={treatment}
          ></ApModal>
        )}
      </div>
    </div>
  );
};

export default AvAppointment;
