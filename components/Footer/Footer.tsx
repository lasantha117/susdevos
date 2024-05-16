import Link from 'next/link';

const footerData = [
  { label: "About", link: "#about" },
  { label: "Benefits", link: "#benefits" },
  { label: "Terms", link: "#terms" },
  { label: "Privacy", link: "#privacy" }
  // Add more footer data as needed
];

export default function Page() {
  return (
    //Create footer
    <footer className="w-full text-white p-4 bg-[#111827] flex justify-center">
        <div className="flex flex-col flex-wrap justify-center items-center w-full sm:flex-row sm:gap-14 gap-4">
          {footerData.map((item, index) => (
            <div key={index} className='text-lg font-Outfit m-2 hover:text-gray-400'>
              <Link href={item.link} as={item.link}>{item.label}</Link>
              {/* Add additional content for each footer item if needed */}
            </div>
          ))}
        </div>
    </footer>
  );
}