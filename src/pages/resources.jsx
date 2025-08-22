// src/pages/resources.jsx
import Head from 'next/head';
import Resources from '../app/components/Resources';

export default function ResourcesPage() {
  return (
    <>
      <Head>
        <title>Resources - Digital Marketing Agency</title>
        <meta name="description" content="Explore a curated collection of expert content crafted to sharpen your skills, grow your brand, and simplify execution." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Resources />
    </>
  );
} 