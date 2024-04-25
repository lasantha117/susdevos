// Step2.tsx
import React, { useState, ChangeEvent } from 'react';
import { Button, Input, Label, Link, TextField } from 'react-aria-components';
import Image from 'next/image';

import PhoneNumberInput from './PhoneNumberInput';

interface Step2Props {
  onNext: () => void;
  onPrevious: () => void;
  onChange: (data: { [key: string]: string }) => void;
}

const Step2: React.FC<Step2Props> = ({ onNext, onPrevious, onChange }) => {
  const [formData, setFormData] = useState({
    organization: '',
    phoneNumber: '',
    message: '',
  })
  const [selectedCountryCode, setSelectedCountryCode] = useState('+1');
  const [selectedOptions, setSelectedOptions] = useState<Array<string>>([]);

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountryCode(e.target.value);
    // You can also pass the selected country code to the onChange handler if needed
    onChange({ countryCode: e.target.value });
  };

  const handleOptionChange = (event: { target: { value: any; checked: any; }; }) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter(option => option !== value));
    }
  };
  

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    onChange({ [name]: value });
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

          <h1 className="text-3xl font-semibold">One more step.</h1>
          <p className='text-base'>something should write here</p>
        </div>

        <div className='flex flex-col gap-2'>
        <Label>Organisation</Label>
        <input type="text" name="organization" placeholder="Enter Your Name" value={formData.organization} onChange={handleChange} className="bg-white focus:bg-white outline-none p-2 focus:ring-2 focus:ring-offset-1 transition border-2 rounded-lg" style={{ color: 'black' }} />

        <PhoneNumberInput formData={{
            phoneNumber: ''
          }} handleChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
            throw new Error('Function not implemented.');
          } } selectedCountryCode={''} handleCountryCodeChange={function (e: React.ChangeEvent<HTMLSelectElement>): void {
            throw new Error('Function not implemented.');
          } }/>

        <Label>Your Message</Label>
        <textarea name="message" placeholder="Write here if you have anything else to know." value={formData.message} onChange={handleChange} className="bg-white focus:bg-white outline-none p-2 focus:ring-2 focus:ring-offset-1 transition border-2 rounded-lg" style={{ color: 'black' }}/>

        <label>
          <input
            type="checkbox"
            value="conditions"
            checked={selectedOptions.includes('conditions')}
            onChange={handleOptionChange}
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
        
        <button className="bg-black hover:bg-gray-300 active:bg-blue-500 rounded p-2 outline-none focus:ring-2 focus:ring-offset-1 transition text-white hover:text-black hover:font-semibold" onClick={onNext}>Create Account</button>

        </div>

    </div>

    </div>
    
  );
};

export default Step2;