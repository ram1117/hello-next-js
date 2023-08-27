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
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        const color = `#${randomColor}`;
        return (
          <>
            <div style={{ background: `${color}`, height: '10px' }} />
            {/* <span className="text-red-500">{item.name}</span> */}
            <h2 style={{ color: `${color}` }}>{item.name}</h2>
          </>
        );
      })}
    </div>
  );
}
export default Page;
