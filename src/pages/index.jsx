// src/pages/index.jsx
import Head from 'next/head';
import Hero from '../app/components/Hero';
import Impact from '../app/components/Impact';
import TiltCardSection from '../app/components/TiltCardSection';
import ServicesNew from '../app/components/ServicesNew';
import Resources from '../app/components/Resources';
import FAQ from '../app/components/FAQ';

export default function Home() {
  return (
    <>
      <Head>
        <title>Digital Marketing Agency</title>
        <meta name="description" content="Grow your business with our digital marketing solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div 
        className="bg-[#ffffff] min-h-screen w-screen max-w-none overflow-x-hidden"
        style={{ 
          width: '100vw', 
          maxWidth: 'none',
          margin: '0',
          padding: '0'
        }}
      >
        <Hero />
        <Impact />
        <TiltCardSection />
        <ServicesNew />
        {/* <Resources /> */}
        <FAQ />
      </div>
    </>
  );
}
