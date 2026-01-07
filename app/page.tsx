import Hero from './components/Hero';
import Collections from './components/Collections';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <Hero />
      <Collections />

    {/* Temporary content below the Hero */}
    <section className="flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Next.js App!</h1>

      <p className="text-lg text-gray-700 mb-6 text-center max-w-lg">
        This is your first Next.js page.
        You can build amazing websites with React + Server features!
      </p>

      <a
      href="https://nextjs.org/docs"
      target="_blank"
      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Learn Next.js →
      </a>
      </section>
      </main>
  );
}