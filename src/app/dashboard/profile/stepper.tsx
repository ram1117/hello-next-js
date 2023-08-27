import { useRef } from 'react';
import Separator from './separator';

function Stepper({
  index,
  title,
  className = '',
}: {
  index: number;
  title: string;

  className?: string;
}) {
  return (
    <div className={`my-16 relative flex flex-col justify-center items-center border-2 border-red-500`}>
      <button
        className={`bg-blue-600 rounded-full text-white w-[40px] h-[40px] relative ${className} z-200`}
      >
        {index}
      </button>
      <p>{title}</p>
    </div>
  );
}

export default Stepper;
