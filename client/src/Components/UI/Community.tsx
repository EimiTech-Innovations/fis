import globe_image from '../../assets/globe.svg';

const Community = () => {
  return (
    <div id='community' style={{ background: 'linear-gradient(-90deg,rgba(175, 214, 245, 0.384)  30%,  #fdffff 80%)' }}>
      <div className="container flex items-center justify-center py-20 mx-auto " >
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">

          {/* Globe Image Section */}
          <div className="">
            <img src={globe_image} alt="Globe" className="object-contain w-full h-full animate-spin-slow" />

          </div>

          {/* Text Content Section */}
          <div className="flex flex-col items-center justify-center w-full p-4 text-center md:items-start lg:w-2/5 md:p-8 lg:text-left">
            <h3 className="mb-4 text-2xl font-bold">Join our community</h3>
            <p className="mb-6 text-sm md:text-base lg:mb-8">
              Engage with like-minded individuals, access valuable resources, and participate in enriching discussions aimed at fostering learning, growth, and collaboration.
            </p>
            <a href='https://chat.whatsapp.com/GBagnJfknP9DkeoVvswezZ' target='__blank' className="px-4 py-2 font-bold rounded text-bgText bg-btnBg hover:bg-btnHover">
              Join now
            </a>
          </div>

        </div>
      </div>
    </div>

  );
};


export default Community;
