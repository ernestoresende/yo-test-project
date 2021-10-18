import * as React from 'react';
import { Context } from '@store/GlobalStateProvider';
import Video from 'twilio-video';
import copy from 'copy-to-clipboard';
import * as S from './styled';

import Participant from '@components/containers/Participant';
import { Spacer } from '@components/layout/Spacer';
import { Box } from '@components/layout/Box';
import { Spinner } from '@components/common/Spinner';
import { Button } from '@components/common/Button';
import { ConfigFooter } from '@components/config/ConfigFooter';
import { Text } from '@components/common/Text';
import { useWindowSize } from '@utils/useWindowSize';

import BetaLogo from '@assets/illustrations/betaLogo.svg';
import InviteIllustration from '@assets/illustrations/inviteFriend.svg';

const VideoTile = ({ children }) => {
  return (
    <Box className="col outer-tile-container">
      <Box className="outer-tile-container">
        <Box className="inner-tile-container">
          <Box className="inner-wrapper">{children}</Box>
        </Box>
      </Box>
    </Box>
  );
};

const ChatRoom = ({ ...props }) => {
  const { globalState } = React.useContext(Context);
  const { roomName, userToken } = globalState;
  const [room, setRoom] = React.useState(null);
  const [participants, setParticipants] = React.useState([]);
  const [hasCopied, setHasCopied] = React.useState(false);

  const windowSize = useWindowSize();
  const verticalVideoTileWidth = windowSize.width;
  const horizontalVideoTileWidth = Math.trunc(windowSize.width / 2 - 100);

  React.useEffect(() => {
    const participantConnected = (participant) => {
      setParticipants((prevParticipants) => [...prevParticipants, participant]);
    };

    const participantDisconnected = (participant) => {
      setParticipants((prevParticipants) => prevParticipants.filter((p) => p !== participant));
    };

    /* Uses the token and userName from globalState to connect with the Twilio Video Service */
    Video.connect(userToken, {
      name: roomName,
    }).then((room) => {
      setRoom(room);
      room.on('participantConnected', participantConnected);
      room.on('participantDisconnected', participantDisconnected);
      room.participants.forEach(participantConnected);
    });

    /* Stops all the local participant's tracks and disconnects from the room if the local participant
    is already connected */
    return () => {
      setRoom((currentRoom) => {
        if (currentRoom && currentRoom.localParticipant.state === 'connected') {
          currentRoom.localParticipant.tracks.forEach(function (trackPublication) {
            trackPublication.track.stop();
          });
          currentRoom.disconnect();
          return null;
        } else {
          return currentRoom;
        }
      });
    };
  }, [roomName, userToken]);

  React.useEffect(() => {
    const currentHost = window.location.host;
    if (hasCopied) copy(`${currentHost}/?invitecode=${roomName}`);
    setTimeout(() => setHasCopied(false), 1500);
  }, [hasCopied]);

  const remoteParticipants = participants.map((participant) => (
    <Participant
      key={participant.sid}
      participant={participant}
      isRemoteParticipant={true}
      _videoClass="video-stream"
    />
  ));

  return (
    <React.Fragment>
      <S.PageBackdrop>
        <S.LogoWrapper>
          <BetaLogo style={{ width: '60px' }} />
        </S.LogoWrapper>
        <S.MainWrapper
          horizontalVideoTileWidth={horizontalVideoTileWidth}
          verticalVideoTileWidth={verticalVideoTileWidth}
        >
          <VideoTile>
            {room ? (
              <Participant
                key={room.localParticipant.sid}
                participant={room.localParticipant}
                _videoClass="video-stream"
                isRemoteParticipant={false}
              />
            ) : (
              <Box flex center style={{ height: '100vh' }}>
                <Spinner size={48} />
              </Box>
            )}
          </VideoTile>
          <Spacer size={12} />
          <VideoTile>
            {participants.length === 0 ? (
              <Box className="video-stream-backdrop">
                <InviteIllustration style={{ width: '150px' }} />
                <Spacer size={24} />
                <Text fontSize="xs" textColor="gray6" fontWeight={600}>
                  Ainda não tem ninguém aqui. Convide alguém para entrar!
                </Text>
                <Spacer size={24} />
                <Button
                  onClick={() => setHasCopied(true)}
                  style={{ width: 'initial' }}
                  backgroundColor="blueGray3"
                >
                  Copiar link de convite
                </Button>
              </Box>
            ) : (
              remoteParticipants
            )}
          </VideoTile>
        </S.MainWrapper>
      </S.PageBackdrop>
      <ConfigFooter />
    </React.Fragment>
  );
};

export default ChatRoom;
