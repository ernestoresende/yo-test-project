import React from 'react';
import type { NextPage } from 'next';

import { Context } from '@store/GlobalStateProvider';
import { TitleAndMetaTags } from '@components/Seo';
import { Lobby } from '@components/containers/Lobby';

const Home: NextPage = () => {
  const { globalDispatch } = React.useContext(Context);
  const [permission, setPermission] = React.useState(false);

  React.useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      /* Maps all media devices from the user */
      const mappedVideoInputs = devices.filter((device) => device.kind === 'videoinput');
      const mappedAudioInputs = devices.filter((device) => device.kind === 'audioinput');
      const mappedAudioOutputs = devices.filter((device) => device.kind === 'audiooutput');

      /* Checks if none of the media devices are giving back a deviceId. If that's the case, try to get the
      permission from the user and update the permission global state */
      if (
        !mappedAudioInputs[0].deviceId &&
        !mappedVideoInputs[0].deviceId &&
        !mappedAudioOutputs[0].deviceId
      ) {
        try {
          navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((mediaStream) => {
            if (mediaStream) {
              console.log('here');
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
            ...mappedAudioInputs,
            ...mappedVideoInputs,
            ...mappedAudioOutputs,
          },
        });
      }
    });
  }, [permission]);

  return (
    <>
      <TitleAndMetaTags title="Yo! Inglês" />
      <Lobby />
    </>
  );
};

export default Home;
