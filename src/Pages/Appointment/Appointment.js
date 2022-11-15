import React, { useState } from "react";
import AvAppointment from "./AvAppointment/AvAppointment";
import ApBanner from "./ApBanner/ApBanner";

const Appointment = () => {
  const [selected, setSelected] = useState(new Date());

  return (
    <div>
      <ApBanner selected={selected} setSelected={setSelected}></ApBanner>
      <AvAppointment selected={selected}></AvAppointment>
    </div>
  );
};

export default Appointment;
