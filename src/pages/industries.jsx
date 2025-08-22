// src/pages/industries.jsx
import Head from 'next/head';
import Industries from '../app/components/Industries';

export default function IndustriesPage() {
  return (
    <>
      <Head>
        <title>Industries - Digital Marketing Agency</title>
        <meta name="description" content="We craft digital strategies that adapt to your industry, connect with your audience, and move your brand forward." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Industries />
    </>
  );
} 