import React from 'react';
import type { NextPage } from 'next';

import { TitleAndMetaTags } from '@components/Seo';
import { Lobby } from '@components/containers/Lobby';

const Home: NextPage = () => {
  return (
    <>
      <TitleAndMetaTags title="Yo! Inglês" />
      <Lobby />
    </>
  );
};

export default Home;
