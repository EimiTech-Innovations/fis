import React from "react";
import working from "../../assets/working.svg"
import { Link, Location, useLocation } from "react-router-dom";

export const Work: React.FC = () => {

  const location: Location = useLocation()



  return (
    <section id="services">
      {
        location.pathname === "/services" &&
        <section className="py-20 mx-auto bg-no-repeat bg-cover bg-heroBg">
          <div className="container px-5 mx-auto">
            <p className="py-5 font-semibold"> <Link to={"/"} className="hover:underline decoration-bgText"> Home</Link> /
              <Link className="hover:underline decoration-bgText" to={"/services"}> Services</Link>
            </p>

            <h2 className="pt-5 text-3xl font-bold"> Services</h2>
            <p className="pb-5 lg:w-1/2"> Our services equip businesses with advanced web application solutions, including custom development, cloud integration, and data-driven insights, enabling you to innovate, scale, and thrive in the digital world.</p>
          </div>

        </section>
      }
      <div className="container py-20 mx-auto text-center">
        <p className="text-sm text-bgText"> Coming soon! </p>
        <h3 className="py-5 text-2xl font-bold"> Our services/products are in the works</h3>
        <img className="mx-auto" src={working} alt="Working" />
      </div>
    </section>
  );
};
