import { Suspense } from 'react';
import Loading from './loading';

function AgreementLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="border-2 border-green-500 h-full w-full m-5 flex justify-center items-center">
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </section>
  );
}

export default AgreementLayout;
