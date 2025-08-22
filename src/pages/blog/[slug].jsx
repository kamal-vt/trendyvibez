// src/pages/blog/[slug].jsx
import Head from 'next/head';
import BlogPost from '../../app/components/BlogPost';
import { getBlogBySlug, getAllBlogSlugs } from '../../data/blogs';

export default function IndividualBlogPage({ slug, currentBlog }) {
  const metaTitle = currentBlog?.title ?? 'Blog';
  const metaDescription = currentBlog?.description ?? 'Read insights and guides on digital marketing.';
  const metaKeywords = currentBlog?.keywords ?? 'digital marketing, blog, insights';

  return (
    <>
      <Head>
        <title>{metaTitle} - Digital Marketing Agency</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content="2025-01-15T00:00:00.000Z" />
        <meta property="article:author" content="Digital Marketing Agency" />
        <meta property="article:section" content="Digital Marketing" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentBlog.title} />
        <meta name="twitter:description" content={currentBlog.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlogPost blog={slug} />
    </>
  );
} 

export async function getStaticPaths() {
  const slugs = getAllBlogSlugs();
  return {
    paths: slugs.map((s) => ({ params: { slug: s } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const currentBlog = getBlogBySlug(slug);
  return {
    props: {
      slug,
      currentBlog,
    },
  };
}