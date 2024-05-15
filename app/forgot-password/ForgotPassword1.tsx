import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Input, Label, Link, TextField } from 'react-aria-components';
import { type FieldValues, useForm } from 'react-hook-form';

import {
  ForgotPasswordSchema1,
  ForgotPasswordSchemaData1,
} from './passwordClientActions';

interface Step1Props {
  onNext: () => void;
  onChange: (data: { [key: string]: string }) => void;
}

const ForgotPassword1: React.FC<Step1Props> = ({ onNext, onChange }) => {
  const [formData, setFormData] = useState({
    email: '',
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordSchemaData1>({
    resolver: zodResolver(ForgotPasswordSchema1),
  });

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    onNext();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    onChange({ [name]: value });
  };

  return (
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
          Forgot Password ?
        </h1>
        <p className="text-center text-base font-medium text-gray-500">
          No worries, we’ll send you reset instructions.
        </p>

        <Form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <TextField className="flex flex-col gap-2" name="email">
            <Label className="font-medium">Email</Label>
            <Input
              {...register('email')}
              className="border-2 border-slate-600 focus:bg-white outline-none p-2 rounded-lg focus:ring-2 focus:ring-offset-1 transition"
              value={formData.email}
              onChange={handleChange}
            />
            {errors?.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </TextField>

          <Button
            className="lg:mt-2 text-white bg-slate-950 hover:bg-slate-800 active:bg-slate-900 rounded-lg p-2 outline-none focus:ring-2 focus:ring-offset-1 transition"
            type="submit"
          >
            Reset Password
          </Button>
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
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword1;
