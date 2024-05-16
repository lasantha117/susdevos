'use client';

import { Button, Link } from 'react-aria-components';

export default function NotFound() {
  return (
    <div className="items-center justify-center p-24 h-screen w-screen text-center mx-auto place-content-center">
      <h1 className="font-semibold text-2xl lg:text-6xl text-slate-950">
        Page Not Found
      </h1>
      <p className="my-4 font-medium text-lg lg:text-xl text-center lg:w-96 mx-auto">
        The page you are looking for does not exist.Here are some helpful links:
      </p>

      <div className="flex flex-col lg:flex-row gap-2 justify-center items-center">
        <Button
          onPress={() => window.history.back()}
          className="font-medium border-2 bg-white p-2 rounded-lg text-slate-950 hover:bg-slate-100 w-32 h-14 lg:w-[163px] lg:h-[60px]"
        >
          Go Back
        </Button>
        <Button
          onPress={() => window.history.back()}
          className="font-medium border-2 bg-slate-950 text-white px-2 lg:p-2 rounded-lg hover:bg-slate-800 w-32 h-14 lg:w-[163px] lg:h-[60px]"
        >
          <Link href="/login">Take me home</Link>
        </Button>
      </div>
    </div>
  );
}
