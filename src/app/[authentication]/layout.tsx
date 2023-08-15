import React from 'react';

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full flex flex-cols justify-center items-center">
      {children}
    </div>
  );
}
export default AuthLayout;
