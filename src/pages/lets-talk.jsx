// src/pages/lets-talk.jsx
import Head from 'next/head';
import LetsTalk from '../app/components/LetsTalk';

export default function LetsTalkPage() {
  return (
    <>
      <Head>
        <title>Let's Talk - Digital Marketing Agency</title>
        <meta name="description" content="Your next big move starts here. Whether you're looking to grow, rebrand, or simply do things smarter we're ready to help you make it happen." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LetsTalk />
    </>
  );
} 