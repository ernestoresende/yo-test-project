import * as React from 'react';
import { reducer } from './Reducers';

const initialState = {
  displayName: '',
  userName: '',
  userToken: '',
  roomName: '',
  isAudioMuted: false,
  isVideoShown: true,
};

const useGlobalState = () => {
  const [globalState, globalDispatch] = React.useReducer(reducer, initialState);
  return { globalState, globalDispatch };
};

export default useGlobalState;
