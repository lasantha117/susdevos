import React from "react";


const products = [
  {
    id: 1,
    name: 'Development of a Industrial park',
    button: '#',
    href: '#',
    imageSrc:
      'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT34IawD3nXe7WNvnAEr1oiyI-KZOn6zpW7-UZgmvERDSoTYEjM',
    imageAlt: '',
  },

  {
    id: 2,
    name: 'Road extension through a city and forest area',
    button: '#',
    href: '#',
    imageSrc:
      'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSh_XjeoX__fgxUnBU-L3dLjxCfjMSwnZ-YF6EuifhzZFl0DuBb',
    imageAlt: '',
  },

  {
    id: 3,
    name: '100MW Solar & 500MW Wind power plants',
    button: '#',
    href: '#',
    imageSrc:
      'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTrhDNY18bD5feY9VFd6aqlo1eGC3tE7ZCNBvcVb6ZuJPMYd1oi',
    imageAlt: '',
  },
];


export default function CasePage(){
  return(
    <div className = 'p-64 mx-auto bg-white bg-opacity-80 border border-black border-opacity-80  text-3xl text-center '>
      <div className = 'bg-white mt-[10px]'>
       <h1 className = 'lg:text-[48px] md:text-xl sm:text-6xl text-black text-center font-medium font-Outfit tracking-tight '> Case Studies </h1> 
       <p className = 'lg:text-[24px] md:text-xl sm:text-6xl  text-black text-center font-medium font-Outfit leading-8  mt-16 '> Exploring Real-World Success Stories: How SusDev-OS Drives Environmental Impact and Sustainability </p>
      

       <div className="grid grid-cols-auto sm:grid-cols-auto lg:grid-cols-3 gap-4 justify-center mt-16">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="bg-black lg:h-[550px] lg:w-full justify-center aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg lg:aspect-none group-hover:opacity-auto  ">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="md:h-full lg:h-[550px] lg:w-full object-center r-[32px]"
                />
              </div>

              <div className="mt-4 flex-colum justify-between">
                <div>
                  <h3 className="lg:text-[30px] text-black font-medium font-Outfit text-left">
                    <a href={product.href}>
                      <span aria-hidden="true" className="2xl:w-full mr-[] " />
                      {product.name}
                    </a>
                  </h3> 
                </div>
                
                <div>
                  <button
                    className=" bg-white flex-none  mt-6 block  px-3 py-2  text-sm shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-[100px] border-[2px] border-black text-black font-semibold lg:w-[164px] lg:h-[44px] text-center lg:text-[20px] font-Outfit ">
                    Read More 
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>   
  );
}

