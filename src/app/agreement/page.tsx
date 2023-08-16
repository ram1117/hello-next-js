import { text } from 'node:stream/consumers';
import React from 'react';

function Page() {
  const data = [
    { name: 'healthcare' },
    { name: 'agriculture' },
    { name: 'tech' },
    { name: 'manufacturing' },
    { name: 'tourism' },
  ];
  return (
    <div>
      {data.map((item) => {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        let color = `#${randomColor}`;
        return (
          <>
            <div style={{ background: `${color}`,height:'10px' }}></div>
            {/* <span className="text-red-500">{item.name}</span> */}
            <h2 style={{ color: `${color}` }}>{item.name}</h2>
          </>
        );
      })}
    </div>
  );
}
export default Page;
