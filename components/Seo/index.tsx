import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { TitleAndMetaTagsProps } from './types';

export function TitleAndMetaTags({
  title = 'Yo! Inglês',
  description = '',
  image,
  url,
  pathname,
}: TitleAndMetaTagsProps) {
  const router = useRouter();

  const imageUrl = `${url}/social/${image || 'default.png'}`;
  const path = pathname || router.pathname;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:url" content={`${url}${path}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
