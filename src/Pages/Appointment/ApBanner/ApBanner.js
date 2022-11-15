import HeroImg from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const ApBanner = ({ setSelected, selected }) => {
  return (
    <div>
      <div className="hero" style={{ backgroundImage: `url(${HeroImg})` }}>
        <div className="hero-overlay bg-opacity-60 flex justify-center">
          <div className="hero-content flex-col lg:flex-row ">
            <img
              src={HeroImg}
              alt="hero_Image"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApBanner;
