import Head from 'next/head';

export default function Landing() {
  return (
    <>
      <Head>
        <title>Landing - Trendy Vibe</title>
        <meta name="description" content="Landing page featuring a custom SVG illustration." />
      </Head>
      <main className="min-h-screen flex items-center justify-center bg-slate-900 p-6">
        <div className="w-full max-w-5xl">
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-3xl md:text-5xl font-semibold text-slate-100 text-center">Welcome to Trendy Vibe</h1>
            <p className="text-slate-300 text-center max-w-2xl">Explore our services and resources. This landing page showcases an accessible SVG asset.</p>
            <div className="w-full rounded-xl overflow-hidden shadow-2xl ring-1 ring-slate-700/50 bg-slate-800">
              <img
                src="/landingsvg.svg"
                alt="Landing illustration"
                className="w-full h-auto"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}


