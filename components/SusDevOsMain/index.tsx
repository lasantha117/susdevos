import React from 'react'
import Image from 'next/image';


const SusDev: React.FC = () => {
  return (
    <div className=" flex flex-col sm:flex-row sm:w-full h-80 mb-28 mx-2">
      {/* Left Content */}
      <div className='w-full sm:w-1/3 md:w-1/2 h-full'>
        <div className='h-1/2'>
          <h3 className='pt-6 text-center xl:text-left md:text-center sm:pl-28 text-xl font-bold mb-2 sm:h-20'>Realtime data from development projects</h3>
          <p className='text-center xl:text-left md:text-center sm:pl-28'>Projects location, ESG, resource footprint data digitized.</p>
        </div>
        <div className='h-1/2'>
          <h3 className='pt-6 text-center xl:text-left md:text-center sm:pl-28 text-xl font-bold mb-2 sm:h-20'>Tangible climate reporting</h3>
          <p className='text-center xl:text-left md:text-center sm:pl-28'>Manage and streamline work towards tangible sustainable development.</p>
        </div>
      </div>
      {/* Middle Image  */}
      <div className='hidden xl:block w-1/3 h-full'>
        <Image
            src="/Images/SusDevOsMain/Group.png"
            alt="SusDev Image"
            width={1000}
            height={1000}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
      </div>
      {/* Right Content */}
      <div className='w-full sm:w-1/3 md:w-1/2 h-full sm:ml-2'>
      <div className='h-1/2'>
          <h3 className='text-center xl:text-left md:text-center pt-6 sm:pr-28 text-xl font-bold mb-2 sm:h-20 '>Workflow lifecycle management</h3>
          <p className='text-center xl:text-left md:text-center sm:pr-28'>Projects and their sub-projects workflow is automated across stakeholders.</p>
        </div>
        <div className='h-1/2'>
          <h3 className='text-center xl:text-left md:text-center pt-6 sm:pr-28 text-xl font-bold mb-2 sm:h-20'>Collaborative, Node mesh & AI</h3>
          <p className='text-center xl:text-left md:text-center sm:pr-28'>Data shared with SaaS/ self hosted nodes on demand. AI Q&A - suggestions support work. API integration with othe IS.</p>
        </div>
      </div>
  </div>
  )
};

export default SusDev