import * as React from 'react';
import * as S from './styled';
import { useRouter } from 'next/router';

import { Context } from '@store/GlobalStateProvider';
import { Spacer } from '@components/layout/Spacer';
import { MicSwitch, CameraSwitch, ExitCall } from '@components/config/ConfigButtons';
import { ConfigDialog } from '@components/config/ConfigDialog';

export const ConfigFooter = () => {
  const router = useRouter();
  const { globalState, globalDispatch } = React.useContext(Context);

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

  /* Cleans the token from the global state and routes the user to the evaluation screen */
  async function onLeaveCall() {
    await router.push(`/feedback`);
    await globalDispatch({ type: 'SET_USER_TOKEN', payload: null });
  }

  return (
    <S.FooterWrapper>
      <S.ConfigWrapper>
        <MicSwitch
          backgroundColor="blue6"
          onClick={() => onMicToggle()}
          isActive={globalState.isAudioMuted}
        />
        <Spacer size={24} />
        <CameraSwitch
          backgroundColor="blue6"
          onClick={() => onVideoToggle()}
          isActive={!globalState.isVideoShown}
        />
        <Spacer size={24} />
        <ConfigDialog />
        <Spacer size={24} />
        <ExitCall onClick={() => onLeaveCall()} />
      </S.ConfigWrapper>
    </S.FooterWrapper>
  );
};
