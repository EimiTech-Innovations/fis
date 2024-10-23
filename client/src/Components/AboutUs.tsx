import React from 'react'

import about1 from '../assets/about2.svg'
import about2 from '../assets/about2.svg'
import about3 from '../assets/about3.svg'
// import ComingSoon from './ComingSoon'



export const AboutUs: React.FC = () => {
  return (
    <>
      <div id='about' className='flex flex-col items-center px-4 py-8 bg-cover border md:flex-row md:py-16 bg-heroBg md:px-8 lg:px-16'>
        {/* Left side - Images */}
        <div className='flex items-center justify-center gap-4 mb-8 md:gap-6 md:w-1/2 md:mb-0'>
          <div className="flex flex-col gap-4 border border-red-400 md:gap-6">
            <img className="object-cover w-48 h-48 rounded-lg shadow-lg md:w-60 md:h-60" src={about1} alt="about picture 1" />
            <img className="object-cover w-48 h-48 rounded-lg shadow-lg md:w-60 md:h-60" src={about3} alt="about picture 3" />
          </div>
          <img className="object-cover w-48 h-48 ml-4 rounded-lg shadow-lg md:w-60 md:h-60 md:ml-6" src={about2} alt="about picture 2" />
        </div>

        {/* Right side - Text and description */}
        <div className='max-w-xl text-left md:w-1/2'>
          <h2 className='text-2xl font-bold md:text-3xl'>What we do...</h2>
          <p className='mt-4 mb-6'>
            We are committed to revolutionizing the digital landscape through our innovative services and solutions.
          </p>
          {/* Additional description */}
          <ul className='space-y-4'>
            <li className='flex items-start'>
              <span className='mr-2 text-green-500'>&#9658;</span>
              <div>
                <h3 className='font-semibold'>Workshops and Training</h3>
                <p>Create a recognizable and trustworthy brand that resonates deeply with our target audience, reflecting our values and commitment to excellence.</p>
              </div>
            </li>
            <li className='flex items-start'>
              <span className='mr-2 text-green-500'>&#9658;</span>
              <div>
                <h3 className='font-semibold'>IT & Software Solutions</h3>
                <p>Delivering innovative IT and software solutions tailored to meet your plans and ideas and overcome its challenges, ensuring everything works together smoothly.</p>
              </div>
            </li>
            <li className='flex items-start'>
              <span className='mr-2 text-green-500'>&#9658;</span>
              <div>
                <h3 className='font-semibold'>Continuous Learning and Adaptation</h3>
                <p>Cultivating a culture of ongoing learning and adaptability within your organization to stay ahead in the ever-evolving digital landscape.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}