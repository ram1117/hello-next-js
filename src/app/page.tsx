import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Hello</h1>
      <div>
        <Link
          href={{
            pathname: `/page/1`,
            query: `1`,
          }}
        >
          Page 1
        </Link>
        <Link
          href={{
            pathname: `/page/2`,
            query: `2`,
          }}
        >
          Page 2
        </Link>
        <Link
          href={{
            pathname: `/page/3`,
            query: `3`,
          }}
        >
          Page 3
        </Link>
      </div>
    </main>
  );
}
