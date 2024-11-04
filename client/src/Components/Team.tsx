import React from "react";
import profileIcon from "../assets/profile.png"
import profileIcon2 from "../assets/profile2.png"
import profileIcon3 from "../assets/profile3.png"

const Team: React.FC = () => {
  return (
    <div className="flex flex-col w-4/5 gap-10 py-10 mx-auto md:flex-row place-content-center">
      <div className="md:w-1/2 place-content-center">
        <h3 className="text-2xl font-bold"> Meet the Team</h3>
        <p>
          Meet the vibrant team behind the organisation vision, where each
          member contributes their expertise and enthusiasm to every project and
          initiative. With diverse backgrounds and skills, we unite to innovate
          and excel, ensuring we consistently exceed expectations and drive
          success.
        </p>
      </div>

      <section className="content-center text-gray-600 body-font">-*
        <div className="flex flex-wrap justify-center py-auto ">
          <div className="p-2 md:p-4 lg:w-1/3 md:w-1/2">
            <div className="relative flex flex-col items-center text-center w-36 md:w-full md:h-56 group">
              <img
                alt="Max Touthang"
                className="flex-shrink-0 object-cover object-center w-full h-56 rounded-lg group-hover:opacity-30 "
                src={profileIcon}
              />
              <h1 className="absolute transition ease-in-out delay-150 shadow-sm md:hidden top-36 group-hover:block">
                Max Touthang
              </h1>
            </div>
          </div>
          <div className="p-2 md:p-4 lg:w-1/3 md:w-1/2 ">
            <div className="relative flex flex-col items-center text-center w-36 md:w-full md:h-56 group">
              <img
                alt="Marcus Chongloi"
                className="flex-shrink-0 object-cover object-center w-full h-56 rounded-lg group-hover:opacity-30 "
                src={profileIcon2}
              />
              <h1 className="absolute transition ease-in-out delay-150 shadow-sm md:hidden top-36 group-hover:block">
                Marcus Chongloi
              </h1>
            </div>
          </div>
          <div className="p-2 md:p-4 lg:w-1/3 md:w-1/2 ">
            <div className="relative flex flex-col items-center text-center w-36 md:h-56 group md:w-full">
              <img
                alt="Mamang Touthang"
                className="flex-shrink-0 object-cover object-center w-full h-56 rounded-lg group-hover:opacity-30 "
                src={profileIcon3}
              />
              <h1 className="absolute transition ease-in-out delay-150 shadow-sm md:hidden top-36 group-hover:block">
                Mamang Touthang
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
