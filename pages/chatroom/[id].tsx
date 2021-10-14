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

  /* Retrieves the JWT token from the token server, which will be stored in
  the global state and used to connect with the room */
  React.useEffect(() => {
    api
      .get(`?identity=${globalState.userName}&room=${globalState.roomName}`)
      .then((res) => {
        globalDispatch({ type: 'SET_USER_TOKEN', payload: res.data });
        setIsLoading(false);
      })
      .catch((err) => console.warn(err));
  }, [globalDispatch, globalState.userName, globalState.roomName]);

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
