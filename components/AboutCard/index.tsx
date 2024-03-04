import Image from 'next/image';
import { Button } from 'react-aria-components';



import Card from './ACard';

const About: React.FC = () => {
  const cardDataArray = [
    {
      imgSrc:
        'https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png',
      content:
        'How SusDev OS resolves typical issues facing climate impact mitigation action',
      cardCn:
        'shadow-lg bg-teal-400 ',
      pCn: 'text-slate-950',
      buttonCn:
        'text-white bg-slate-950',
    },
    {
      imgSrc:
        'https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png',
      content:
        'Are you from the private sector looking to de-carbonize? We have you covered',
      cardCn:
        'bg-slate-950 shadow-lg',
      pCn: 'text-gray-100',
      buttonCn:
        'bg-white text-black',
    },
    {
      imgSrc:
        'https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png',
      content:
        'AI-powered insights for UN-FCCC, NDC, UN-SDG, SBTi, Sendai framework compliance',
      cardCn:
        'bg-orange-300 shadow-lg',
      pCn: 'text-slate-950',
      buttonCn:
        'text-white bg-slate-950',
    },
  ];

  return (
    <>
      <div className="flex-none mx-auto justify-center mt-24">
        <h1 className="flex-none text-2xl lg:text-5xl font-semibold text-center">
          Why SusDev OS
        </h1>
        <p className="font-medium mb-10 mx-6 px-6 mt-6 md:px-8 lg:px-10 md:mt-8 lg:mt-10 md:mx-24 lg:mx-32 xl:mx-56 text-center lg:text-2xl">
          As the world nears the critical 1.5°C global warming threshold,
          digitally managing development projects is crucial for meeting climate
          goals. Our open-source platform empowers organizations to plan, build,
          and maintain sustainable infrastructure like roads, cities, housing,
          and energy systems while tracking emissions. With real-time data, AI
          insights, and GIS mapping, we provide the end-to-end workflow
          automation tools needed for climate-smart development.
        </p>

        <div className="grid grid-cols-1 2xl:grid-cols-3 mx-24 gap-6">
        {cardDataArray.map((cardData, index) => (
          <Card key={index} cardData={cardData} />
        ))}
      </div>
      </div>

      
    </>
  );
};

export default About;