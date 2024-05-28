import React from 'react';
import SideNavigationBar from './SideNavigationBar';
import LogOutButton from './LogOutButton';


export default function admin() {
    const NavigationBarData1 = [
        {
          title: "Home",
          image: "/Images/SideNavigationBar/home.png",
          alt: "Home Image",
          button: true
        },
        {
          title: "Dashboard",
          image: "/Images/SideNavigationBar/dashboard.png",
          alt: "Dashboard Image",
          button: true
        },
        {
          title: "Projects",
          image: "/Images/SideNavigationBar/project.png",
          alt: "Projects Image",
          button: true
        },
        {
          title: "Tasks",
          image: "/Images/SideNavigationBar/task.png",
          alt: "Task Image",
          button: true
        },
        {
          title: "Reporting",
          image: "/Images/SideNavigationBar/report.png",
          alt: "Reporting Image",
          button: true
        },
        {
          title: "Users",
          image: "/Images/SideNavigationBar/user.png",
          alt: "Users Image",
          button: true
        },
      // Add more card data objects as needed
    ];

    const NavigationBarData2 = [
      {
        title: "Support",
        image: "/Images/SideNavigationBar/support.png",
        alt: "Support Image",
        button: true
      },
      {
        title: "Settings",
        image: "/Images/SideNavigationBar/settings.png",
        alt: "Settings Image",
        button: true
      }
    // Add more card data objects as needed
  ];

  return (

    <div>
      {/* <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button> */}
        <div className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start align-item-center">
            <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
              Untitled UI
            </h1>
            <div className="flex flex-col my-4 border-b border-gray-100 pb-4">
              <div className="flex flex-col gap-2">
                {NavigationBarData1.map((card, index) => (
                  <SideNavigationBar key={index} title={card.title} alt={card.alt} image={card.image} button={card.button} />
                ))}
              </div>
            </div>
            {/* support & setting  */}
            <div className=" my-4 border-b border-gray-100 pb-4">
                <div className="grid gap-2"> 
                  {NavigationBarData2.map((card, index) => (
                    <SideNavigationBar key={index} title={card.title} alt={card.alt} image={card.image} button={card.button} />
                  ))}
                </div>
            </div>
            {/* logout */}
            <div className=" my-4">
              <LogOutButton/>
            </div>
          </div>
        </div>
      {/* </Disclosure> */}
    </div>
  );
}
