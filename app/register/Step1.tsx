// Step1.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button, Input, Label, Link, TextField } from 'react-aria-components';
import { onSubmit } from './serverActions';
import Image from 'next/image';

interface Step1Props {
  onNext: () => void;
  onChange: (data: { [key: string]: string }) => void;
}

const Step1: React.FC<Step1Props> = ({ onNext, onChange }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    reEnterPassword: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    onChange({ ...formData, [name]: value }); // Update the overall form data
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await onSubmit(null, formData); // Assuming `oldState` is not required and can be null
    // Handle response or errors
    if (response && response.error) {
      console.error('Error:', response.error);
    } else {
      // Proceed to the next step
      onNext();
    }
  };

  return (
    <div className="flex justify-center container p-32">
      <div className="flex flex-col gap-8">
        <div className='flex flex-col gap-4 items-center'>
        <Image
            src="/Images/RegistrationForm/susdevosImage.png"
            alt="Register Image"
            width={50}
            height={50}
            className='mb-4'
          />

          <h1 className="text-3xl font-semibold">Create an Account</h1>
          <p className='text-base'>something should write here</p>
        </div>
      
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <TextField className="flex flex-col gap-2" name="email">
            <Label>Email*</Label>
            <Input className="bg-white focus:bg-white outline-none p-2 focus:ring-2 focus:ring-offset-1 transition border-2 rounded-lg" type='email'  placeholder='Enter your Email' onChange={handleChange} />
          </TextField>
          <TextField className="flex flex-col gap-2" name="password">
            <Label>Password*</Label>
            <Input
              className="bg-white focus:bg-white outline-none p-2 focus:ring-2 focus:ring-offset-1 transition border-2 rounded-lg"
              type="password" placeholder='Create a password' onChange={handleChange}
            /><p className='text-gray-400'>Must be at least 8 characters.</p>
          </TextField>
          <TextField className="flex flex-col gap-2" name="reEnterPassword">
            <Label>Re-enter Password*</Label>
            <Input
              className="bg-white focus:bg-white outline-none p-2 focus:ring-2 focus:ring-offset-1 transition border-2 rounded-lg"
              type="password" placeholder='Re-enter your password' onChange={handleChange}
            />
          </TextField>
          <Button onPressEnd={onNext}
            className="bg-black hover:bg-gray-300 active:bg-blue-500 rounded p-2 outline-none focus:ring-2 focus:ring-offset-1 transition text-white hover:text-black hover:font-semibold"
            type="submit"
          >
            Get started
          </Button>
          <div className="flex justify-center flex-col flex-wrap items-center  sm:flex-row">
            <p className='pr-1 text-gray-400'>Already have an account? </p>
            <Link
              className="text-black font-semibold outline-none hover:border-b border-blue-600 hover:text-blue-500"
              href="/login"
            >
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step1;