import Image from 'next/image';
import React from 'react';

const SolvesTheProblem: React.FC = () => {
  const cardDataArray = [];

  return (
    <>
      <div className="flex-none mx-auto justify-center mt-24 ">
        <h1 className="flex-none md:text-3xl lg:text-5xl font-s-[48px] text-center font-bold font-family:outfit">
          How SusDev-OS Solves the Problem
        </h1>
        <p className="font-medium mb-10 mx-6 px-6 mt-6 md:px-8 lg:px-10 md:mt-8 lg:mt-10 md:mx-24 lg:mx-32 xl:mx-56 text-center lg:text-[24px]  sm:text-[24px] md:text-3xl font-family:outfit">
          SusDev-OS revolutionizes climate-conscious development projects
          through advanced technology, which helps cut back on tons of
          emissions, simplified for everyday use by people - not just
          scientists.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 py-10 px-24 sm:grid-cols-1 lg:grid-cols-2  lg:ml-36 lg:mr-36">

          {/* order-1 */}

          <div className="lg:ml-36 ">
            <Image
              src="/Images/SolvesTheProblemCard/frame_11.png"  
              alt=""
              width={900}
              height={900}
              className="sm:w-full sm:h-full md:w-full md:h-full lg:w-[650px] lg:h-[450px] sm:ml-2 sm:mt-2 lg:ml-6 lg:mt-6"
              style={{ objectFit: 'contain' }}
            />
          </div>

          {/* order-2 */}

          <div className=" lg:ml-16 lg:mr-36 lg:py-10 mt-10 md:ml-10">
            <h2 className="lg:text-[40px] md:text-1xl sm:text-1xl sm:mt- md:mt-8 font-bold tracking-tight text-gray-900 text-center">
              The Problem
            </h2>
            <p className="mt-8 lg:text-[24px] md:text-1xl sm:text-1xl text-black text-bold md:mt-6 text-center ">
              In an era where global 🌍 climate goals hang at a critical tipping
              point, the challenge lies in our inability to truly assess,
              mitigate, monitor and restore the climate impact of 🏗 development
              projects.
            </p>
          </div>

          {/* order-3 */}
          <div className="mt-8 lg:ml-36 order-3">
            <h2 className="lg:text-[40px] md:text-1xl sm:text-1xl sm:mt- md:mt-8 font-bold tracking-tight text-gray-900 text-center lg:mt-24">
              The Solution
            </h2>
            <p className="mt-8 lg:text-[24px] md:text-1xl sm:text-1xl  text-black text-bold md:mt-6 text-center ">
              SusDev-OS 🌱 emerges as the catalyst for change, bridging the gap
              between intention and action by delivering real-time climate
              impact monitoring and actionable insights, charting the course
              toward a sustainable future. 🌍
            </p>
          </div>


          {/* order-4 */}
          <div className=" lg:mr-10 sm:order-last mt-10">
            <Image
              src="/Images/SolvesTheProblemCard/frame_12.png"
              alt=""
              width={900}
              height={900}
              className="sm:w-full sm:h-full md:w-full md:h-full lg:w-[650px] lg:h-[450px] xl:w-full sm:ml-2 sm:mt-2 lg:ml-6 lg:mt-6"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SolvesTheProblem;
