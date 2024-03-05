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
    <footer className="text-white p-4">
        <div className="flex sm:flex-cols-1 md:flex-cols-2 lg:flex-cols-4 gap-8">
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