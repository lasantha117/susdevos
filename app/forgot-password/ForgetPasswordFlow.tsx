import { useState } from 'react';

import ForgotPassword1 from './ForgotPassword1';
import ForgotPassword2 from './ForgotPassword2';
import ForgotPassword3 from './ForgotPassword3';
import ForgotPassword4 from './ForgotPassword4';


interface FormData {
  email: string;
  newPassword: string;
  confirmPassword: string;
}

const ForgetPasswordFlow = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    email:'',
    newPassword:'',
    confirmPassword:'',
  });

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleFormDataChange = (data: { [key: string]: string }) => {
    setFormData({ ...formData, ...data });
  };

  return (
    <div>
      {step === 1 && (
        <ForgotPassword1
          onNext={handleNextStep}
          onChange={handleFormDataChange}
        />
      )}

      {step === 2 && (
        <ForgotPassword2
          onNext={handleNextStep}
          onPrevious={handlePreviousStep}
          email = {formData.email}
        />
      )}

      {step === 3 && (
        <ForgotPassword3
          onNext={handleNextStep}
           onChange={handleFormDataChange}
        />
      )}
      {step === 4 && (
        <ForgotPassword4
          onNext={handleNextStep}
        />
      )}
    </div>
  );
};
export default ForgetPasswordFlow;