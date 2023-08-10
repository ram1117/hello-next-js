import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen border-2 border-red-500">
      <h1 className="w-1/2 text-4xl m-4">Hello</h1>
      <div className="w-1/2 flex justify-between m-12">
        <Link
        href="dashboard/profile/"
        >Profile
        </Link>
        <Link
        href="dashboard/settings/"
        >
          Settings
        </Link>
      </div>
      <div className="w-1/2 flex justify-between">
        <Link
          className="text-red-400"
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
