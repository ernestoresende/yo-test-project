import * as React from 'react';
import { reducer } from './Reducers';

const initialState = {
  displayName: '',
  userName: '',
  userToken: '',
  roomName: '',
  isAudioMuted: false,
  isVideoShown: true,
  userMediaPermission: false,
  userMediaDevices: false,
  videoInputDevice: '',
  audioInputDevice: '',
  audioOutputDevice: '',
};

const useGlobalState = () => {
  const [globalState, globalDispatch] = React.useReducer(reducer, initialState);
  return { globalState, globalDispatch };
};

export default useGlobalState;
