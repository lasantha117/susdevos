import React from 'react';



import Card from './STPCard';


const SolvesTheProblem: React.FC = () => {
  const cardDataArray = [
    {
      imgSrc: '/Images/CaseCard/caseStudyCardImage1.webp',
      pcn1: 'The Problem',
      content1:
        'In an era where global 🌍 climate goals hang at a critical tipping point, the challenge lies in our inabilityto truly assess, mitigate, monitor and restore the climate impact of  🏗️  development projects.', //Description of the case study
      cardCn: '', //Card class name
    },
    // {
    //   imgSrc: '/Images/CaseCard/caseStudyCardImage2.webp',
    //   topic: 'The Problem',
    //   content: 'Road extension through a city and forest area', //Description of the case study
    //   cardCn: '', //Card class name
    // },
  ];

  return (
    <>
      <div className="flex-none mx-auto justify-center mt-24">
        <h1 className="flex-none text-2xl lg:text-5xl font-s-[48px] text-center font-bold font-family:outfit">
         How SusDev-OS Solves  the Problem
        </h1>
        <p className="font-medium mb-10 mx-6 px-6 mt-6 md:px-8 lg:px-10 md:mt-8 lg:mt-10 md:mx-24 lg:mx-32 xl:mx-56 text-center lg:text-[24px]  sm:text-[24px] font-family:outfit">
          SusDev-OS revolutionizes climate-conscious development projects through advanced technology, which helps cut back on tons of emissions, 
          simplified for everyday use by people - not just scientists.
        </p>

        <div>
          {cardDataArray.map((cardData, index) => (
            <Card key={index} cardData={{ ...cardData, pCn1: cardData.pcn1 }} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SolvesTheProblem;