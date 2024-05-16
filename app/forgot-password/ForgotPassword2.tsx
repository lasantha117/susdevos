import Image from 'next/image';
import { Button, Input, Label, Link, TextField } from 'react-aria-components';

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/>;

interface Step2Props {
  onNext: () => void;
  onPrevious: () => void;
  email: string;
}

const ForgotPassword2: React.FC<Step2Props> = ({ onPrevious, onNext, email}) => {
  return (
    <div className="flex justify-center container p-32">
      <div className="relative flex flex-col gap-4 w-[360px]">
        <Image
          className="size-10 w-14 h-14 mx-auto"
          src="/Images/ForgetPassword/email.webp"
          width={300}
          height={300}
          alt="mail"
        />

        <h1 className="text-3xl text-center font-semibold text-slate-950">
          Check Your Email
        </h1>
        <div>
          <p className="text-center text-base font-medium text-gray-500">
            We sent a verification link to{' '}
          </p>
          <p className="text-center text-base font-medium text-gray-500">
            {email}
          </p>
        </div>

        <Button
          className="lg:mt-2 text-white bg-slate-950 hover:bg-slate-800 active:bg-slate-900 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-offset-1 transition"
          type="submit"
          onPress={onNext}
        >
          Open Email App
        </Button>
        <div className="flex flex-row gap-2 mx-auto">
          <p className="text-center text-base font-medium text-gray-500">
            Didn’t receive the email?
          </p>
          <Link href="/login" className="font-medium">
            Click to resend
          </Link>
        </div>

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
      </div>
    </div>
  );
};

export default ForgotPassword2;
