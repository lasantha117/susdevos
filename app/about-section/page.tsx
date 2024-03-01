import { Button } from 'react-aria-components';

export default function About({}) {
  return (
    <>
      <div className="flex-none mx-auto justify-center  mt-24">
        <h1 className="flex-none text-5xl font-semibold text-center">
          Why SusDev OS
        </h1>
        <p className="font-medium px-10 mt-10 mx-56 text-center text-2xl">
          As the world nears the critical 1.5°C global warming threshold,
          digitally managing development projects is crucial for meeting climate
          goals. Our open-source platform empowers organizations to plan, build,
          and maintain sustainable infrastructure like roads, cities, housing,
          and energy systems while tracking emissions. With real-time data, AI
          insights, and GIS mapping, we provide the end-to-end workflow
          automation tools needed for climate-smart development.
        </p>

        <div className="flex gap-6 mb-24 justify-center mt-24">
          <div className="basis-1/3 flex-wrap px-6 py-4 max-w-96 max-h-96 rounded-3xl border-solid  bg-teal-400 shadow-lg ">
            <img
              className="max-w-24 max-h-24 ml-6 mt-8"
              src=""
              alt="logo"
            />
            <p className="mx-6 mt-8 font-medium text-2xl mb-5 text-slate-950">
              How SusDev OS resolves typical issues facing climate impact
              mitigation action
            </p>
            <Button className="flex-wrap w-32 h-11 mb-8 mt-8 rounded-full border-none mx-6  text-white bg-slate-950">
              Read More
            </Button>
          </div>

          <div className="basis-1/3 flex-wrap px-6 py-4 max-w-96 max-h-96 rounded-3xl border-solid bg-slate-950 shadow-lg ">
            <img
              className="max-w-24 max-h-24 mx-6 mt-8"
              src=""
              alt="logo"
            />
            <p className="mx-6 mt-8 font-medium text-2xl mb-5 text-gray-100">
              Are you from the private sector looking to de-carbonize? We have
              you covered.
            </p>
            <Button className="flex-wrap w-32 h-11 mb-8 mt-8 rounded-full border-none mx-6 bg-white text-black">
              Read More
            </Button>
          </div>

          <div className=" basis-1/3 flex-wrap px-6 py-4 max-w-96 max-h-96 rounded-3xl border-solid bg-orange-300 shadow-lg ">
            <img
              className="max-w-24 max-h-24 mx-6 mt-8"
              src=""
              alt="logo"
            />
            <p className="mx-6 mt-8 font-medium text-2xl mb-5 text-slate-950">
              AI-powered insights for UN-FCCC, NDC, UN-SDG, SBTi, Sendai
              framework compliance.
            </p>
            <Button className="flex-wrap w-32 h-11 mb-8 mt-8 rounded-full mx-6 border-none text-white bg-slate-950">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
