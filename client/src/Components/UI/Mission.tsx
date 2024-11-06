import React from "react";
import innovateLives from "../../assets/innovate-lives.svg";
import promoteInnovation from "../../assets/promote-innovation.svg";
import transformDigital from "../../assets/transform.svg";
import { Link, Location, useLocation } from "react-router-dom";


const Mission: React.FC = () => {

  const location: Location = useLocation()

  return (
    <>
      {
        location.pathname === "/mission" &&
        <section className="py-20 mx-auto bg-no-repeat bg-cover bg-heroBg">
          <div className="container px-5 mx-auto">
            <p className="py-5 font-semibold"> <Link to={"/"} className="hover:underline decoration-bgText"> Home</Link> /
              <Link className="hover:underline decoration-bgText" to={"/mission"}> Mission</Link>
            </p>

            <h2 className="pt-5 text-3xl font-bold"> Mission</h2>
            <p className="pb-5 lg:w-1/2"> Our mission is to innovate lives by creating groundbreaking solutions, promote innovation at every step, and transform the digital landscape to empower individuals and businesses for a brighter, more connected future.</p>
          </div>

        </section>
      }

      <div className="container mx-auto">

        <div id="mission" className="py-10 text-center md:py-20 ">
          {location.pathname != "/mission" && <h2 className="text-3xl font-bold"> Mission</h2>}

          {/* TODO:Quote should be dynamic */}
          <p> &quot;Technology is best when it brings people together&quot;</p>
          <em> ~ Matt Mullenweg, Founder of WordPress </em>
          <section className="flex flex-col items-center justify-center gap-5 py-5 lg:gap-32 md:py-10 md:flex-row">
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
      </div>

    </>

  );
};

export default Mission;
