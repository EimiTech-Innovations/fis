import React from 'react';
import globe_image from '../assets/globe.svg';

const Community = () => {
  return (
    <div className="flex justify-center items-center py-20 px-4 md:px-10" style={{ background: 'linear-gradient(-90deg, #79E3DD 0%, rgba(121, 227, 221, 0.2) 50%)' }}>
      <div className="relative h-[400px] md:h-[500px] lg:h-[700px] w-full max-w-screen-xl flex flex-col lg:flex-row gap-8">
        
        {/* Globe Image Section */}
        <div className="w-full lg:w-1/2 h-full relative">
          <img src={globe_image} alt="Globe" className="w-full h-full object-contain" />
          <div className="absolute top-0 right-0 w-1/4 h-full"></div>
        </div>

        {/* Text Content Section */}
        <div className="w-full lg:w-2/5 flex flex-col justify-center items-start p-4 md:p-8 text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-black">Join our community</h2>
          <p className="text-sm md:text-base lg:text-lg mb-6 lg:mb-8 text-black">
            Engage with like-minded individuals, access valuable resources, and participate in enriching discussions aimed at fostering learning, growth, and collaboration.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Join now
          </button>
        </div>
        
      </div>
    </div>
  );
};


export default Community;
