import Card from "../ButtonCard/BCard";

const NonButton: React.FC = () => {
  const cardDataNew = [
    {
      title: "Seamless Reporting and Data Integration",
      content: "Effortlessly streamline your reporting process with integrated climate data, ensuring compliance with global standards. Connect with your ERPs and IS platforms using APIs.",
      image: "/Images/NonButtonCard/image_01.png",
      button: false
      
    },
    {
        title: "Instant Access to Critical Insights",
        content: "Unlock instant access to mission-critical information, empowering decision-makers with data-driven insights for a brighter, climate-aware future.",
        image: "/Images/NonButtonCard/image_02.png",
        button: false
        
      },
      {
        title: "Accountability and Transparency",
        content: "Foster a culture of accountability and transparency, facilitating effective policy development and demonstrating your commitment to a sustainable world.",
        image: "/Images/NonButtonCard/image_03.png",
        button: false
        
      },
      {
        title: "AI-Driven Emissions Intelligence",
        content: "Harness the power of AI for precise emissions calculations and recommendations, optimizing your climate mitigation strategies.",
        image: "/Images/NonButtonCard/image_04.png",
        button: false
        
      },
      {
        title: "User-Friendly Innovation",
        content: "Whether a starting out IT user or an experienced user, our system is easy to use and understand. And we will support multiple languages soon.",
        image: "/Images/NonButtonCard/image_05.png",
        button: false
        
      },
      {
        title: "UNFCCC NDC, UN-SDG, SBTi & Sendai reporting",
        content: "Unlock a treasure trove of insights by generating UNFCCC, UN-SDG, and Sendai reports from real-world data.",
        image: "/Images/NonButtonCard/image_06.png",
        button: false
       
      },
    // Add more card data objects as needed
  ];

  

    return (
      <div className="bg-green-200 w-full flex justify-center items-center mx-auto px-16 py-5">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardDataNew.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} image={card.image} buttonLogic={card.button} />
        ))}
        </div>
      </div>
    );

  };

  export default NonButton;
