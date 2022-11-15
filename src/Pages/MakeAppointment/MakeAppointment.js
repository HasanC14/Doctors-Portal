import React from "react";
import doctorImg from "../../assets/images/doctor.png";
import BgImg from "../../assets/images/appointment.png";
import Button from "../Shared/Button/Button";
const MakeAppointment = () => {
  return (
    <section style={{ background: `url(${BgImg})` }}>
      <div className="hero lg:h-[448px] w-full">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctorImg}
            alt="doctor"
            className="lg:w-1/2 md:w-1/2 lg:-mt-48 md:-mt-28 md:block hidden"
          />
          <div className="text-white sm:text-center">
            <h1 className="text-5xl font-bold">Make an appointment Today</h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
