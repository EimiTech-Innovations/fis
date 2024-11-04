import React from "react";
import innovateLives from "../assets/innovate-lives.svg";
import promoteInnovation from "../assets/promote-innovation.svg";
import transformDigital from "../assets/transform.svg";

const Mission: React.FC = () => {
  return (
    <div id="mission" className="h-screen text-center place-content-center ">
      <h2 className="text-3xl font-bold"> Mission</h2>
      {/* TODO:Quote should be dynamic */}
      <p> &quot;Technology is best when it brings people together&quot;</p>
      <em> ~ Matt Mullenweg, Founder of WordPress </em>
      <section className="flex flex-col items-center justify-center gap-16 py-10 pl-10 pr-10 md:flex-row py-14">
        {/* One */}
        <div className="w-full max-w-xs text-center">
          <img
            className="h-32 mx-auto md:h-60"
            src={innovateLives}
            alt="Innovate Lives"
          />
          <h3 className="py-4 font-semibold"> Innovate Lives</h3>
          <p>
            Enhancing everyday lives by providing digital solutions that solve
            real-world challenges
          </p>
        </div>

        {/* Two */}
        <div className="w-full max-w-xs text-center">
          <img
            className="h-32 mx-auto md:h-60"
            src={promoteInnovation}
            alt="Promote Innovation"
          />
          <h3 className="py-4 font-semibold"> Promote Innovation</h3>
          <p>
            Fosters a culture of creativity and forward-thinking, driving
            continuous innovation across industries.
          </p>
        </div>

        {/* Three */}
        <div className="w-full max-w-xs text-center">
          <img
            className="h-32 mx-auto md:h-60"
            src={transformDigital}
            alt="Transform Digital Landscape"
          />
          <h3 className="py-4 font-semibold"> Transform Digital Landscape</h3>
          <p>
            Reshaping the digital landscape with cutting-edge technologies that
            redefine how businesses and communities operate
          </p>
        </div>
      </section>
    </div>
  );
};

export default Mission;
