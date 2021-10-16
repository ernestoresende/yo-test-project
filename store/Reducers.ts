export const reducer = (state, action) => {
  switch (action.type) {
    case 'TURN_MIC_ON':
      return {
        ...state,
        isAudioMuted: true,
      };
    case 'TURN_MIC_OFF':
      return {
        ...state,
        isAudioMuted: false,
      };
    case 'TURN_VIDEO_ON':
      return {
        ...state,
        isVideoShown: true,
      };
    case 'TURN_VIDEO_OFF':
      return {
        ...state,
        isVideoShown: false,
      };
    case 'SET_DISPLAY_NAME':
      return {
        ...state,
        displayName: action.payload,
      };
    case 'SET_USER_NAME':
      return {
        ...state,
        userName: action.payload,
      };
    case 'SET_USER_TOKEN':
      return {
        ...state,
        userToken: action.payload,
      };
    case 'SET_ROOM_NAME':
      return {
        ...state,
        roomName: action.payload,
      };
    case 'SET_USER_MEDIA_PERMISSION':
      return {
        ...state,
        userMediaPermission: action.payload,
      };
    case 'SET_USER_MEDIA_DEVICES':
      return {
        ...state,
        userMediaDevices: action.payload,
      };
    case 'SET_VIDEO_INPUT_DEVICE':
      return {
        ...state,
        videoInputDevice: action.payload,
      };
    case 'SET_AUDIO_INPUT_DEVICE':
      return {
        ...state,
        audioInputDevice: action.payload,
      };
    case 'SET_AUDIO_OUTPUT_DEVICE':
      return {
        ...state,
        audioOutputDevice: action.payload,
      };
    default:
      return state;
  }
};
