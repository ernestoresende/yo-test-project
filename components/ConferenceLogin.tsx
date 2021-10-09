import * as React from 'react';
import styled from 'styled-components';
import { MdAddAPhoto } from 'react-icons/md';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import Illustration from '@assets/illustrations/loginIllustration.svg';

import { Button } from '@components/primitives/Button';
import { Heading } from '@components/primitives/Heading';
import { Text } from '@components/primitives/Text';
import { Input } from '@components/primitives/Input';
import { Spacer } from '@components/layout/Spacer';
import { Box } from '@components/layout/Box';
import { MicSwitch, CameraSwitch, SettingsSwitch } from '@components/ConfigurationButtons';

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
  background-color: #ffffff;
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
const AvatarWrapper = styled.button`
  cursor: pointer;
`;
const AvatarFallback = styled(AvatarPrimitive.Fallback)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  width: var(--spacing-xxxl);
  height: var(--spacing-xxxl);
  border-radius: 100%;
  background-color: var(--colors-blueGray6);

  svg {
    color: var(--colors-blueGray1);
    height: var(--spacing-sm);
    width: var(--spacing-sm);
  }
`;
const FormWrapper = styled.div`
  padding: 0 var(--spacing-xl);
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
  function onSettingsPress() {
    console.log('heyyyyyy');
  }

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
            <AvatarWrapper>
              <AvatarPrimitive.Root>
                <AvatarFallback>
                  <MdAddAPhoto />
                </AvatarFallback>
              </AvatarPrimitive.Root>
            </AvatarWrapper>
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
              <SettingsSwitch onClick={() => onSettingsPress()} />
            </Box>
          </FormWrapper>
          <IllustrationWrapper>
            <Illustration />
          </IllustrationWrapper>
        </DialogBoxWrapper>
      </Background>
    </>
  );
};

export default ConferenceLoginPage;
