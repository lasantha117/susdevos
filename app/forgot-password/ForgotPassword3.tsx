import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { Input, Label, Link, TextField } from 'react-aria-components';
import { type FieldValues, useForm } from 'react-hook-form';

import {
  ForgotPasswordSchema2,
  ForgotPasswordSchemaData2,
} from './passwordClientActions';

interface Step3Props {
  onNext: () => void;
  onChange: (data: { [key: string]: string }) => void;
}

const ForgotPassword3: React.FC<Step3Props> = ({ onNext, onChange }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordSchemaData2>({
    resolver: zodResolver(ForgotPasswordSchema2),
  });

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    onNext();
  };

  return (
    <>
      <div className="flex justify-center container p-32">
        <div className="relative flex flex-col gap-4 w-[360px]">
          <Image
            className="size-10 w-14 h-14 mx-auto"
            src="/Images/ForgetPassword/key.webp"
            width={300}
            height={300}
            alt="login"
          />
          <h1 className="text-3xl text-center font-semibold text-slate-950">
            Set New Password
          </h1>
          <p className="text-center text-base font-medium text-gray-500">
            Your new password must be different to previously used passwords.
          </p>

          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField className="flex flex-col gap-2" name="newPassword">
              <Label className="font-medium">New Password</Label>
              <Input
                {...register('newPassword')}
                className="border-2 border-slate-300 focus:bg-white outline-none p-2 rounded-lg focus:ring-2 focus:ring-offset-1 transition"
                type="password"
                placeholder='Enter new password'
              />
              {errors?.newPassword && (
                <span className="text-red-500">
                  {errors.newPassword.message}
                </span>
              )}
            </TextField>

            <TextField className="flex flex-col gap-2" name="confirmPassword">
              <Label className="font-medium">Confirm Password</Label>
              <Input
                {...register('confirmPassword')}
                className="border-2 border-slate-300 focus:bg-white outline-none p-2 rounded-lg focus:ring-2 focus:ring-offset-1 transition"
                type="password"
                placeholder='Confirm your password'
              />
              {errors?.confirmPassword && (
                <span className="text-red-500">
                  {errors.confirmPassword.message}
                </span>
              )}
            </TextField>

            <button
              className="lg:mt-2 text-white bg-slate-950 hover:bg-slate-800 active:bg-slate-900 rounded-lg p-2 outline-none focus:ring-2 focus:ring-offset-1 transition"
              type="submit"
            >
              Reset Password
            </button>

            <Link
              href="/login"
              className="flex flex-row gap-2 items-center mx-auto mt-2 px-4 py-2 rounded-lg hover:bg-slate-200 text-slate-700 font-semibold hover:text-slate-900"
            >
              <Image
                className="size-5 w-fit h-fit"
                src="/Images/ForgetPassword/arrow-left.webp"
                width={300}
                height={300}
                alt="back"
              />
              Back to log in
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword3;
