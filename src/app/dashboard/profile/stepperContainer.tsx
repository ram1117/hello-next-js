import { useEffect, useRef, useState } from 'react';
import Stepper from './stepper';
import Separator from './separator';

const StepperContainer = () => {
  const [separatorWidth, setSeparatorWidth] = useState(0);

  const createConnector = () => {
    const container = document.getElementById('stepper-container');
    const startNode = container?.firstChild as HTMLElement;
    const endNode = container?.childNodes[1] as HTMLElement;
    const leftRect = startNode?.getBoundingClientRect();
    const rightRect = endNode?.getBoundingClientRect();

    const distance = rightRect?.right - leftRect?.left;
    setSeparatorWidth(distance);
    // startNode?.style.setProperty('--psuedo-width', `${distance}px`);
  };

  const resizeFallback = () => {
    createConnector();
  };

  useEffect(() => {
    createConnector();
    window.addEventListener('resize', resizeFallback);

    return () => {
      window.removeEventListener('resize', resizeFallback);
    };
  }, []);

  return (
    <div
      className="border-2 border-green-500 w-4/5 flex justify-between items-center my-12"
      id="stepper-container"
    >
      <Stepper index={1} title="Location" />
      <Separator distance={separatorWidth}></Separator>
      <Stepper index={2} title="Location" />
      <Separator distance={separatorWidth}></Separator>
      <Stepper index={3} title="Location" />
      <Separator distance={separatorWidth}></Separator>
      <Stepper index={4} title="Location" />
    </div>
  );
};

export default StepperContainer;
