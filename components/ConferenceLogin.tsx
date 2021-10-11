import * as React from 'react';
import styled from 'styled-components';
import Illustration from '@assets/illustrations/loginIllustration.svg';

import { Button } from '@components/primitives/Button';
import { Heading } from '@components/primitives/Heading';
import { Text } from '@components/primitives/Text';
import { Input } from '@components/primitives/Input';
import { Spacer } from '@components/layout/Spacer';
import { Box } from '@components/layout/Box';
import { MicSwitch, CameraSwitch, SettingsSwitch } from '@components/ConfigurationButtons';
import { UploadProfileImage } from '@components/UploadProfileImage';

const Background = styled.div`
  background: linear-gradient(var(--colors-violet3), var(--colors-yellow3));
  height: 100vh;
  width: 100vw;
  z-index: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const DialogBoxWrapper = styled.div`
  background-color: var(--colors-gray6);
  margin: var(--spacing-xxs);
  padding: var(--spacing-sm);
  border: solid 2px var(--colors-blueGray1);
  border-radius: 8px;

  box-shadow: 6px 6px 2px var(--colors-blueGray1);
  max-width: 1000px;
  width: 100%;
  max-height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const IllustrationWrapper = styled.div`
  width: 100%;
  svg {
    width: 100%;
    height: auto;
  }
`;

const ConferenceLoginPage = () => {
  return (
    <>
      <Background>
        <DialogBoxWrapper>
          <FormWrapper>
            <Heading as="h1">Participar da aula</Heading>
            <Text as="p" fontSize="sm">
              Digite seu nome para entrar na aula
            </Text>
            <Spacer size={32} />
            <UploadProfileImage />
            <Spacer size={32} />
            <Input name="name" label="Seu nome" isLabelVisible={false} />
            <Spacer size={16} />
            <Button>Entrar na sala</Button>
            <Spacer size={36} />
            <Box flex center>
              <MicSwitch isActive={false} />
              <Spacer size={12} />
              <CameraSwitch isActive={false} />
              <Spacer size={12} />
              <SettingsSwitch />
            </Box>
          </FormWrapper>
          <Spacer size={32} />
          <IllustrationWrapper>
            <Illustration />
          </IllustrationWrapper>
        </DialogBoxWrapper>
      </Background>
    </>
  );
};

export default ConferenceLoginPage;
