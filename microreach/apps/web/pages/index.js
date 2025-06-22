import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <Head>
        <title>MicroReach – Influencer Marketing Plattform</title>
      </Head>
      <main className="w-full max-w-2xl p-8 bg-white rounded-xl shadow-lg flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">MicroReach</h1>
        <p className="mb-6 text-gray-600 text-center">Die Plattform für Brands &amp; Micro-Influencer.<br/>Transparenz, Effizienz, Fairness.</p>
        <div className="flex gap-4 mb-8">
          <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Login als Brand</button>
          <button className="px-6 py-2 bg-pink-500 text-white rounded hover:bg-pink-600">Login als Influencer</button>
        </div>
        <div className="w-full mt-4">
          <h2 className="text-xl font-semibold mb-2">Demo-Kampagnen</h2>
          <ul className="space-y-2">
            <li className="p-4 bg-gray-100 rounded flex flex-col">
              <span className="font-bold">Bio-Snacks Launch</span>
              <span className="text-sm text-gray-500">Budget: 500 € · Deadline: 30.06.2024</span>
              <span className="text-gray-700 mt-1">Wir suchen Food-Influencer für unsere neue Bio-Snack-Linie!</span>
            </li>
            <li className="p-4 bg-gray-100 rounded flex flex-col">
              <span className="font-bold">Fitness App Promo</span>
              <span className="text-sm text-gray-500">Budget: 300 € · Deadline: 15.07.2024</span>
              <span className="text-gray-700 mt-1">Promote unsere neue Fitness-App auf TikTok oder Instagram.</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
