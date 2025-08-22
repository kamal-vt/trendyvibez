// src/pages/blogs.jsx
import Head from 'next/head';
import Blogs from '../app/components/Blogs';

export default function BlogsPage() {
  return (
    <>
      <Head>
        <title>Blogs & Articles - Digital Marketing Agency</title>
        <meta name="description" content="Quick reads with big impact built to inform, inspire, and drive results." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Blogs />
    </>
  );
} 