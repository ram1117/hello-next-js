const AgreementLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="border-2 border-green-500 h-full w-full m-5 flex justify-center items-center">
      {children}
    </section>
  );
};

export default AgreementLayout;
