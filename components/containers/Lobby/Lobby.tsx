import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { Context } from '@store/GlobalStateProvider';
import Illustration from '@assets/illustrations/loginIllustration.svg';
import * as S from './styled';

import { Button } from '@components/common/Button';
import { Heading } from '@components/common/Heading';
import { Text } from '@components/common/Text';
import { Input } from '@components/common/Input';
import { Spacer } from '@components/layout/Spacer';
import { Box } from '@components/layout/Box';
import { MicSwitch, CameraSwitch } from '@components/config/ConfigButtons';
import { ConfigDialog } from '@components/config/ConfigDialog';
import { UploadProfileImage } from '@components/config/UploadProfileImage';
import { PageBackdrop } from '@components/containers/PageBackdrop';

const Lobby = () => {
  const { globalState, globalDispatch } = React.useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  /* Dispatches actions to update the global state with user data */
  async function handleSubmitData(userName: string, displayName: string, roomName: string) {
    globalDispatch({ type: 'SET_USER_NAME', payload: userName });
    globalDispatch({ type: 'SET_DISPLAY_NAME', payload: displayName });
    globalDispatch({ type: 'SET_ROOM_NAME', payload: roomName });
  }

  /* Fired when the user tries to proceed to the ChatRoom and the form values are submited.
    The roomName is a randomly generated string that will be used to create the room 
  */
  async function onSubmit(data) {
    const userName = encodeURI(data.displayName).toLowerCase();
    const roomName = globalState.roomName
      ? globalState.roomName
      : Math.random().toString(20).substr(2, 10);
    const displayName = data.displayName;
    await handleSubmitData(userName, displayName, roomName);
    router.push(`/chatroom/${roomName}`);
  }

  const onMicToggle = () => {
    globalState.isAudioMuted
      ? globalDispatch({ type: 'TURN_MIC_OFF' })
      : globalDispatch({ type: 'TURN_MIC_ON' });
  };

  const onVideoToggle = () => {
    globalState.isVideoShown
      ? globalDispatch({ type: 'TURN_VIDEO_OFF' })
      : globalDispatch({ type: 'TURN_VIDEO_ON' });
  };

  return (
    <>
      <PageBackdrop>
        <S.DialogBoxWrapper>
          <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <Heading as="h1">Participar da aula</Heading>
            <Spacer size={4} />
            {globalState.roomName ? (
              <Text as="p" fontSize="xs" center>
                Você foi convidado para uma sala. Digite seu nome e clique em <b>Entrar na Sala</b>
              </Text>
            ) : (
              <Text as="p" fontSize="xs" center>
                Para criar uma nova sala, digite o seu nome e clique em <b>Criar Nova Sala</b>.
              </Text>
            )}
            <Spacer size={32} />
            <Input
              {...register('displayName', { required: true })}
              name="displayName"
              label="Seu nome"
              isLabelVisible={false}
              validationError={errors?.displayName?.type === 'required'}
              validationMessage={errors?.displayName?.type === 'required' && 'Insira um nome'}
            />
            <Spacer size={16} />
            <Button type="submit">
              {globalState.roomName ? 'Entrar na sala' : 'Criar Nova Sala'}
            </Button>
            <Spacer size={16} />
            <UploadProfileImage />
            <Spacer size={36} />
            <Box flex center>
              <MicSwitch onClick={() => onMicToggle()} isActive={globalState.isAudioMuted} />
              <Spacer size={12} />
              <CameraSwitch onClick={() => onVideoToggle()} isActive={!globalState.isVideoShown} />
              <Spacer size={12} />
              <ConfigDialog />
            </Box>
          </S.FormWrapper>
          <Spacer size={32} />
          <S.IllustrationWrapper>
            <Illustration />
          </S.IllustrationWrapper>
        </S.DialogBoxWrapper>
      </PageBackdrop>
    </>
  );
};

export default Lobby;
