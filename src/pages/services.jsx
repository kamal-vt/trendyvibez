// src/pages/services.jsx
import Head from 'next/head';
import Services from '../app/components/Services';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services - Digital Marketing Agency</title>
        <meta name="description" content="Our digital marketing services that connect, captivate, and convert." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Services />
    </>
  );
} 