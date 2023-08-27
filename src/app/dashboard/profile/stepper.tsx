import { useRef } from 'react';

function Stepper({ index, title }: { index: number; title: string }) {
  const divRef = useRef(null);

  return (
    <div
      className="my-16 relative flex flex-col justify-center items-center border-2 border-red-500"
      ref={divRef}
    >
      <button className="bg-blue-600 rounded-full text-white w-[40px] h-[40px]">
        {index}
      </button>
      <p>{title}</p>
    </div>
  );
}

export default Stepper;
