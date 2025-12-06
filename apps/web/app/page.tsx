


// alabaster gray : E6E1E2
// dark gunmetal : 171512
// Light Gold: E1D58A
// Old Gold: C3AF32


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#171512] px-6 py-24 text-center text-white">
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
        Build Something Extraordinary
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-gray-300">
        A modern development workflow powered by Next.js, Turborepo, and your custom UI toolkit.
        Fast, scalable, and designed for ambitious creators.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <a
          href="#"
          className="rounded-md  bg-amber-200 px-6 py-3 text-lg font-semibold duration-300 text-gray-900 hover:bg-gray-200 transition"
        >
          Get Started
        </a>
        <a
          href="#"
          className="rounded-md border border-white/30 px-6 py-3 text-lg font-semibold text-white hover:bg-white/10 transition"
        >
          Learn More
        </a>
      </div>
    </main>
  );
}
