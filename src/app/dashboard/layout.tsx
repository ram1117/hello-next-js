import React from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full h-full m-5 flex flex-col justify-center items-center">
      <h2 className="text-3xl">Dashboard</h2>
      {children}
    </section>
  );
}
