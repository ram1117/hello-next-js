import React from 'react';

function AuthPage() {
  const arr = ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500'];
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
        const randomColor = arr[Math.floor(Math.random() * arr.length)];
        return <div className={`${randomColor} w-full h-6`}>{item.name}</div>;
      })}
    </div>
  );
}
export default AuthPage;
