import React from 'react';
import styled from 'styled-components';
import type { NextPage } from 'next';

import { TitleAndMetaTags } from '@components/Seo';
import { ConfigFooter } from '@components/config/ConfigFooter';
import { Button } from '@components/common/Button';
import { Heading } from '@components/common/Heading';
import { Text } from '@components/common/Text';
import { mediaMaxWidth } from '@styles/media';

export const Background = styled.div`
  background: linear-gradient(var(--colors-violet3), var(--colors-yellow3));
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  z-index: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaMaxWidth.tablet`
    overflow: hidden;
    height: initial;
    padding: var(--spacing-xxs);
    display: block;
  `}
`;
const Overlay = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
`;
export const DialogBoxWrapper = styled.div`
  background-color: var(--colors-gray6);
  margin: var(--spacing-xxs);
  padding: var(--spacing-sm);
  border: solid 2px var(--colors-blueGray1);
  border-radius: 8px;
  z-index: 5;

  box-shadow: 6px 6px 2px var(--colors-blueGray1);
  max-width: 1000px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaMaxWidth.tablet`
    margin: 0;
    flex-direction: column-reverse;  
    padding: var(--spacing-xxs);
  `}
`;

const Test: NextPage = () => {
  return (
    <>
      <TitleAndMetaTags title="Yo! Inglês" />
      <Background />
      <Overlay />
      <DialogBoxWrapper>
        <Text>Something</Text>
        <Button>A button!</Button>
        <Text>Something else</Text>
      </DialogBoxWrapper>
    </>
  );
};

export default Test;
