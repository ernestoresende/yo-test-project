import React from 'react';
import type { NextPage } from 'next';

import { TitleAndMetaTags } from '@components/Seo';
import PostCallFeedBack from '@components/containers/PostCallFeedback';

const Feedback: NextPage = () => {
  return (
    <>
      <TitleAndMetaTags title="Yo! Inglês | Feedback" />
      <PostCallFeedBack />
    </>
  );
};

export default Feedback;
