import Image from 'next/image';
import {
  Button,
  Checkbox,
  Input,
  Label,
  Link,
  TextField,
} from 'react-aria-components';

import ClientForm from '@/components/ClientForm';

import { onSubmit } from './serverActions';

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className="flex justify-center container p-32">
      <div className="relative flex flex-col gap-8 bg-white w-[360px]">
        <Image
          className="size-10 w-14 h-14 mx-auto"
          src="/Images/Login/login.webp"
          width={300}
          height={300}
          alt="login"
        />
        <h1 className="text-3xl text-center font-semibold">
          Log into your Account
        </h1>
        <p className="text-center font-medium text-gray-500">
          Welcome back! Please enter your details.
        </p>
        <ClientForm
          className="flex flex-col gap-4"
          action={onSubmit}
          initialState={{ error: '' }}
        >
          <TextField className="flex flex-col gap-2" name="username">
            <Label className="font-medium">Email or Username</Label>
            <Input className="border-2 border-slate-600 focus:bg-white outline-none p-2 rounded-lg focus:ring-2 focus:ring-offset-1 transition" />
          </TextField>
          <TextField className="flex flex-col gap-2" name="password">
            <Label className="font-medium">Password</Label>
            <Input
              className="border-2 border-slate-600 focus:bg-white outline-none p-2 rounded-lg focus:ring-2 focus:ring-offset-1 transition"
              type="password"
            />
          </TextField>

          <div className="lg:inline-flex items-center">
            {/* Check box */}
            <Label
              className="relative flex items-center p-3 rounded-full cursor-pointer"
              htmlFor="check"
            >
              <Input
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                id="check"
              />
              <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </Label>
            <Label
              className="mt-px font-medium text-gray-500 cursor-pointer select-none text-sm"
              htmlFor="check"
            >
              Remember Me For 30 Days
            </Label>
            {/* check box */}
            <Link
              className="absolute right-0 text-slate-950 outline-none hover:border-b border-slate-900 font-medium text-sm "
              href="/forgetPassword"
            >
              Forget Password
            </Link>
          </div>
          <Button
            className="text-white bg-slate-950 hover:bg-slate-800 active:bg-slate-900 rounded-lg p-2 outline-none focus:ring-2 focus:ring-offset-1 transition"
            type="submit"
          >
            Sign In
          </Button>
          <div className="inline-flex justify-center gap-2 my-5">
            <p className="text-gray-500 font-medium text-sm">
              Don’t have an account?
            </p>
            <Link
              className="text-sm font-medium text-blue-600 outline-none hover:border-b border-blue-600"
              href="/register"
            >
              Sign Up
            </Link>
          </div>
        </ClientForm>
      </div>
    </div>
  );
}
