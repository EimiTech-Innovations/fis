import React from "react";
import working from "../../assets/working.svg"

export const Work: React.FC = () => {
  return (
    <section id="services">
      <div className="container py-20 mx-auto text-center">
        <p className="text-sm text-bgText"> Coming soon! </p>
        <h3 className="py-5 text-2xl font-bold"> Our services/products are in the works</h3>
        <img className="mx-auto" src={working} alt="Working" />
      </div>
    </section>
  );
};
