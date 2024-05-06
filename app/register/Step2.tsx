// Step2.tsx
import React, { useState, ChangeEvent } from 'react';
import { Button, Input, Label, Link, TextField } from 'react-aria-components';
import Image from 'next/image';
import { useForm, type FieldValues } from 'react-hook-form';
import PhoneNumberInput from './PhoneNumberInput';
import { RegisterSchemaStep2, RegisterDataStep2 }  from './ZodValidation'
import { zodResolver } from '@hookform/resolvers/zod';


interface Step2Props {
  onNext: () => void;
  onPrevious: () => void;
  onChange: (data: { [key: string]: string }) => void;
}

const Step2: React.FC<Step2Props> = ({ onNext, onPrevious, onChange }) => {

  const { register, handleSubmit, formState: { errors } } = useForm<RegisterDataStep2>({
    resolver: zodResolver(RegisterSchemaStep2),
  });

  const [selectedCountryCode, setSelectedCountryCode] = useState('+1');
  const [selectedOptions, setSelectedOptions] = useState<Array<string>>([]);

  const handleOptionChange = (event: { target: { value: any; checked: any; }; }) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter(option => option !== value));
    }
  };
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    onNext()
    
  }

  // const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  //   onChange({ [name]: value });
  // };

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

          <h1 className="text-3xl font-semibold">One more step.</h1>
          <p className='text-base'>something should write here</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-2'>
          <label>Organisation</label>
          <input 
          {...register('organization')}
          type="text" name="organization" placeholder="Enter Your Name" className="bg-white focus:bg-white outline-none p-2 focus:ring-2 focus:ring-offset-1 transition border-2 rounded-lg" style={{ color: 'black' }} />
          {errors.organization && <span className='text-red-500'>{errors.organization.message}</span>}
          <PhoneNumberInput 
              register={register('phoneNumber')}
              error={errors.phoneNumber}
            />
      

          <Label>Your Message</Label>
          <textarea
          {...register('message')}
          name="message" placeholder="Write here if you have anything else to know." className="bg-white focus:bg-white outline-none p-2 focus:ring-2 focus:ring-offset-1 transition border-2 rounded-lg" style={{ color: 'black' }}/>

          <label>
            <input
              type="checkbox"
              {...register('terms')}
              className='mr-2'
            />
            I agree to the 
            <Link
                className="mx-2 text-blue-600 font-semibold outline-none hover:border-b border-black hover:text-black"
                href="/login">
                terms
              </Link>
            and
            <Link
                className="mx-2 text-blue-600 font-semibold outline-none hover:border-b border-black hover:text-black"
                href="/login">
                conditions
              </Link>
              
          </label>
          {
            errors.terms && <p className='text-red-500'>{errors.terms.message}</p>
          }
          <button className="bg-black hover:bg-gray-300 active:bg-blue-500 rounded p-2 outline-none focus:ring-2 focus:ring-offset-1 transition text-white hover:text-black hover:font-semibold"
           type='submit'>Create Account</button>

          </div>

        </form>

        

    </div>

    </div>
    
  );
};

export default Step2;