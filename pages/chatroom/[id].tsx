import * as React from 'react';
import type { NextPage } from 'next';

import { Context } from '@store/GlobalStateProvider';
import { TitleAndMetaTags } from '@components/Seo';
import { Chatroom } from '@components/containers/ChatRoom';
import { Box } from '@components/layout/Box';
import { Spinner } from '@components/common/Spinner';
import { api } from '@utils/api';

const ChatRoomPage: NextPage = () => {
  const { globalState, globalDispatch } = React.useContext(Context);
  const [isLoading, setIsLoading] = React.useState(true);

  /* Retrieves the JWT tokens (conversations service, and video service) from the token server, 
  which will be stored in the global state and used to connect with the room and the conversation instance */
  React.useEffect(() => {
    const getAccessTokens = async () => {
      await api
        .get(`/video-token?identity=${globalState.userName}&room=${globalState.roomName}`)
        .then((res) => {
          globalDispatch({ type: 'SET_USER_TOKEN', payload: res.data });
        })
        .catch((err) => console.warn(err));
      setIsLoading(false);
    };

    getAccessTokens();
  }, []);

  console.log(globalState);

  return (
    <>
      <TitleAndMetaTags title="Yo! Inglês | Chat de vídeo" />
      {isLoading ? (
        <Box flex center style={{ height: '100vh' }}>
          <Spinner size={48} />
        </Box>
      ) : (
        <Chatroom />
      )}
    </>
  );
};

export default ChatRoomPage;
