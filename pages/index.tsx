import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { Context } from '@store/GlobalStateProvider';
import { TitleAndMetaTags } from '@components/Seo';
import { Lobby } from '@components/containers/Lobby';

const Home: NextPage = () => {
  const { globalState, globalDispatch } = React.useContext(Context);
  const { userMediaDevices } = globalState;
  const [permission, setPermission] = React.useState<boolean>(false);

  const router = useRouter();

  React.useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      /* Maps all media devices from the user */
      const mappedVideoInputs = devices.filter((device) => device.kind === 'videoinput');
      const mappedAudioInputs = devices.filter((device) => device.kind === 'audioinput');
      const mappedAudioOutputs = devices.filter((device) => device.kind === 'audiooutput');

      /* Checks if none of the media devices are giving back a deviceId. If that's the case, try to get the
      permission from the user and update the permission global state */
      if (
        !mappedAudioInputs[0].deviceId ||
        !mappedVideoInputs[0].deviceId ||
        !mappedAudioInputs[0].deviceId
      ) {
        try {
          navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((mediaStream) => {
            if (mediaStream) {
              globalDispatch({ type: 'SET_USER_MEDIA_PERMISSION', payload: true });
              setPermission(true);
            }
          });
        } catch {
          globalDispatch({ type: 'SET_USER_MEDIA_PERMISSION', payload: false });
          setPermission(false);
        }
      } else {
        setPermission(true);
        globalDispatch({ type: 'SET_USER_MEDIA_PERMISSION', payload: true });
        globalDispatch({
          type: 'SET_USER_MEDIA_DEVICES',
          payload: {
            videoInputs: {
              ...mappedVideoInputs,
            },
            audioInputs: {
              ...mappedAudioInputs,
            },
            audioOutputs: {
              ...mappedAudioOutputs,
            },
          },
        });
      }
    });
  }, [permission, globalDispatch]);

  React.useEffect(() => {
    if (userMediaDevices) {
      const defaultVideoInput: any[] = Object.values(userMediaDevices.videoInputs);
      const defaultAudioInput: any[] = Object.values(userMediaDevices.audioInputs);
      // const defaultAudioOutputs: any[] = Object.values(userMediaDevices.audioOutputs);

      const defaultAudioOutputs: any = Object.values(userMediaDevices)
        ? Object.values(userMediaDevices)
        : false;

      globalDispatch({
        type: 'SET_VIDEO_INPUT_DEVICE',
        payload: defaultVideoInput[0].deviceId,
      });
      globalDispatch({
        type: 'SET_AUDIO_INPUT_DEVICE',
        payload: defaultAudioInput[0].deviceId,
      });
      globalDispatch({
        type: 'SET_AUDIO_OUTPUT_DEVICE',
        payload: defaultAudioOutputs[0].deviceId,
      });
    }
  }, [userMediaDevices]);

  React.useEffect(() => {
    if (Object.keys(router.query).length > 0 && router.query.invitecode) {
      globalDispatch({ type: 'SET_ROOM_NAME', payload: router.query.invitecode });
    }
  }, [router]);

  console.log(globalState);

  return (
    <>
      <TitleAndMetaTags title="Yo! Inglês" />
      <Lobby />
    </>
  );
};

export default Home;
