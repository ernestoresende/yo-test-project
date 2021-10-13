import * as React from 'react';
import { Context } from '@store/GlobalStateProvider';
import Video from 'twilio-video';
import * as S from './styled';

import Participant from '@components/containers/Participant';
import { Spacer } from '@components/layout/Spacer';
import { Box } from '@components/layout/Box';
import { Heading } from '@components/common/Heading';
import { Spinner } from '@components/common/Spinner';
import { ConfigFooter } from '@components/config/ConfigFooter';

const ChatRoom = ({ ...props }) => {
  const { globalState } = React.useContext(Context);
  const { roomName, userToken } = globalState;
  const [room, setRoom] = React.useState(null);
  const [participants, setParticipants] = React.useState([]);

  console.table([
    ['ROOM DETAILS', true],
    ['room', room],
    ['participants', participants],
  ]);

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

  const remoteParticipants = participants.map((participant) => (
    <Participant key={participant.sid} participant={participant} _videoClass="video-participant" />
  ));

  return (
    <React.Fragment>
      <S.OutterWrapper>
        <S.MainWrapper>
          <S.VideoWrapper>
            <S.RemoteParticipant>
              {remoteParticipants ? (
                remoteParticipants
              ) : (
                <Box flex center style={{ height: '100%', width: '100%' }}>
                  <Heading>Aguardando participante</Heading>
                  <Spacer size={24} />
                  <Spinner size={24} />
                </Box>
              )}
            </S.RemoteParticipant>
          </S.VideoWrapper>
          <S.VideoWrapper>
            <S.LocalParticipant>
              {room ? (
                <Participant
                  key={room.localParticipant.sid}
                  participant={room.localParticipant}
                  _videoClass="video-participant"
                />
              ) : (
                <Box flex center style={{ height: '100%', width: '100%' }}>
                  <Heading>Aguardando participante local</Heading>
                  <Spacer size={24} />
                  <Spinner size={24} />
                </Box>
              )}
            </S.LocalParticipant>
          </S.VideoWrapper>
        </S.MainWrapper>
      </S.OutterWrapper>
      <ConfigFooter />
    </React.Fragment>
  );
};

export default ChatRoom;
