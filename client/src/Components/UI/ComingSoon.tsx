import React from "react";
import image from "../assets/comingsoon.svg";
import { componentTitle } from "../../types/comingSoon";

const ComingSoon: React.FC<componentTitle> = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 py-16 bg-base-200">
      <img className="py-5 w-60 " src={image} alt="Coming soon" />
      <p> {title}</p>
    </div>
  );
};
export default ComingSoon;
