import React from 'react'

import about1 from '../assets/about1.png'
import about2 from '../assets/about2.png'
import about3 from '../assets/about3.png'
// import ComingSoon from './ComingSoon'



export const AboutUs: React.FC = () => {
    return (

        <div id='about' className='flex flex-col md:flex-row items-center  bg-cover border py-8 md:py-16 bg-heroBg px-4 md:px-8 lg:px-16'>
  {/* Left side - Images */}
  <div className='flex items-center justify-center gap-4 md:gap-6 md:w-1/2 mb-8 md:mb-0'>
    <div className="flex flex-col gap-4 md:gap-6">
      <img className="w-48 h-48 md:w-60 md:h-60 object-cover shadow-lg rounded-lg" src={about1} alt="about picture 1" />
      <img className="w-48 h-48 md:w-60 md:h-60 object-cover shadow-lg rounded-lg" src={about3} alt="about picture 3" />
    </div>
    <img className="w-48 h-48 md:w-60 md:h-60 object-cover shadow-lg rounded-lg ml-4 md:ml-6" src={about2} alt="about picture 2" />
  </div>
  
  {/* Right side - Text and description */}
  <div className='text-left md:w-1/2 max-w-xl'>
    <h2 className='text-2xl md:text-3xl font-bold'>What we do...</h2>
    <p className='mt-4 mb-6'>
      We are committed to revolutionizing the digital landscape through our innovative services and solutions.
    </p>
    {/* Additional description */}
    <ul className='space-y-4'>
      <li className='flex items-start'>
        <span className='text-green-500 mr-2'>&#9658;</span>
        <div>
          <h3 className='font-semibold'>Workshops and Training</h3>
          <p>Create a recognizable and trustworthy brand that resonates deeply with our target audience, reflecting our values and commitment to excellence.</p>
        </div>
      </li>
      <li className='flex items-start'>
        <span className='text-green-500 mr-2'>&#9658;</span>
        <div>
          <h3 className='font-semibold'>IT & Software Solutions</h3>
          <p>Delivering innovative IT and software solutions tailored to meet your plans and ideas and overcome its challenges, ensuring everything works together smoothly.</p>
        </div>
      </li>
      <li className='flex items-start'>
        <span className='text-green-500 mr-2'>&#9658;</span>
        <div>
          <h3 className='font-semibold'>Continuous Learning and Adaptation</h3>
          <p>Cultivating a culture of ongoing learning and adaptability within your organization to stay ahead in the ever-evolving digital landscape.</p>
        </div>
      </li>
    </ul>
  </div>
</div>




                <ul className='list-image-triangle'>
                    <li className='mb-5 font-bold'>
                        <p className='absolute '>Workshops and Training </p>
                        <p className='pt-5 font-normal'>
                            Create a recognizable and trustworthy brand that resonates deeply with our target audience, reflecting our values and commitment to excellence.
                        </p>
                    </li>

                    <li className='pb-4 font-bold'>IT & Software solution <br />
                        <span className='font-normal'>
                            Delivering innovative IT and software solutions tailored to meet your plans and ideas and overcome its challenges, ensuring everything  works together smoothly
                        </span>
                    </li>
                    <li className='font-bold '> Continuous Learning and Adaption <br />
                        <span className='font-normal'>
                            Cultivating a culture of ongoing learning and adaptability within your organization to stay ahead in the ever-evolving digital landscape.
                        </span>
                    </li>
                </ul>

            </div>
        </div>
    )
}