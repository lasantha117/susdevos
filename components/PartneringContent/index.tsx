export default function PartneringContent() {
  return (
    <div className="bg-slate-900 w-full lg:h-[712px]">
        {/* Partnering Content Container */}
      <div className="mx-auto py-10 lg:py-20">
        {/* Partering Image */}
        <img
          className="rounded-full size-20 lg:w-[160px] lg:h-[160px] mx-auto "
          src="/Images/PartneringContent/partneringImage.webp"
        />

        {/* Heading */}
        <h1 className="my-5 lg:my-10 text-center text-2xl lg:text-6xl text-white font-semibold ">
          Interested in partnering ?
        </h1>
        {/* Content */}
        <p className="mx-auto text-center w-2/3 h-fit lg:w-[760px] lg:h-[144px]  text-white lg:text-2xl font-medium leading-9">
          We are on the lookout for partners from the sustainability sector,
          development finance and much more to empower our mutual work on
          reaching net-zero. Please so not hesitate to get in touch using the
          above contact form or our email.
        </p>
        <p className="mt-5 lg:mt-10 text-center text-2xl lg:text-6xl font-medium text-teal-500 hover:text-teal-300 "><a  href="/">partner@susdevos.com</a></p>
      </div>
    </div>
  );
}
