import * as React from 'react';
import { Context } from '@store/GlobalStateProvider';
// import * as S from './styled';

import { Spacer } from '@components/layout/Spacer';
import { Box } from '@components/layout/Box';
import { Button } from '@components/common/Button';
import { MicSwitch, CameraSwitch, SettingsSwitch } from '@components/config/ConfigButtons';

const ChatRoom = ({ ...props }) => {
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

  /* DEBUGGING TABLE */
  // console.table([
  //   ['displayName', globalState.displayName],
  //   ['userName', globalState.userName],
  //   ['roomName', globalState.roomName],
  //   ['isAudioMuted', globalState.isAudioMuted],
  //   ['isVideoShown', globalState.isVideoShown],
  // ]);
};

export default ChatRoom;
