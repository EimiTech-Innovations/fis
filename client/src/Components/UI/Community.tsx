import { Link, Location, useLocation } from 'react-router-dom';
import globe_image from '../../assets/globe.svg';

const Community = () => {
  const location: Location = useLocation()

  return (
    <>
      {
        location.pathname === "/community" &&
        <section className="py-20 mx-auto bg-no-repeat bg-cover bg-heroBg">
          <div className="container px-5 mx-auto">
            <p className="py-5 font-semibold"> <Link to={"/"} className="hover:underline decoration-bgText"> Home</Link> /
              <Link className="hover:underline decoration-bgText" to={"/mission"}> Community </Link>
            </p>

            <h2 className="pt-5 text-3xl font-bold"> Community </h2>
            <p className="pb-5 lg:w-1/2"> Become part of our vibrant community and connect with like-minded innovators, tech enthusiasts, and industry experts. Together, we’re building a network that supports growth, collaboration, and shared success.</p>
          </div>
        </section>
      }

      <div id='community' style={{ background: location.pathname === "/community" ? "none" : 'linear-gradient(-90deg,rgba(175, 214, 245, 0.384)  30%,  #fdffff 80%)' }}>
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
    </>


  );
};


export default Community;
