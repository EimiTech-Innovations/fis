import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/notfound.svg";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 py-16 bg-base-200">
      <img className="py-5 w-60 " src={image} alt="Coming soon" />
      <p> Page Not found 🥲</p>
      <Link to={"/"} className="btn btn-wide">
        Go to Home Page{" "}
      </Link>
    </div>
  );
};

export default NotFound;
