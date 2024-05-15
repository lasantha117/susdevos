'use client'
import { Button, Link } from "react-aria-components";

export default function NotFound() {
  return (
    <div className="items-center justify-center p-24 h-screen w-screen text-center mx-auto place-content-center">
      <h1 className="font-semibold text-6xl text-slate-950">Page Not Found</h1>
      <p className="my-4 font-medium text-xl text-center w-96 mx-auto">
        The page you are looking for does not exist.Here are some helpful links:
      </p>

      <div className="flex gap-2 justify-center">
        <Button onPress={() => window.history.back()} className="font-medium border-2 bg-white p-2 rounded-lg text-slate-950 hover:bg-slate-100 w-[163px] h-[60px]">
          Go Back
        </Button>
        <Button onPress={() => window.history.back()} className="font-medium border-2 bg-slate-950 text-white p-2 rounded-lg hover:bg-slate-800 w-[163px] h-[60px]">
          <Link href="/login">Take me home</Link>
        </Button>
      </div>
    </div>
  );
}
