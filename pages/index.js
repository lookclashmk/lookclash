import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <Head>
        <title>LookClash</title>
      </Head>
      <h1 className="text-4xl font-bold text-center">Welcome to LookClash</h1>
      <p className="mt-4 text-center">Upload your look, rate others, and climb the style leaderboard!</p>
    </div>
  );
}
