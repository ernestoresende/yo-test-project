import React from 'react';
import type { NextPage } from 'next';

import { TitleAndMetaTags } from '@components/seo/Seo';
import ConferenceLoginPage from '@components/ConferenceLogin';

const Home: NextPage = () => {
  return (
    <>
      <TitleAndMetaTags title="Yo! Inglês" />
      <ConferenceLoginPage />
    </>
  );
};

export default Home;
