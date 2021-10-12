import * as React from 'react';
import { Context } from '@store/GlobalStateProvider';
import Video from 'twilio-video';
// import * as S from './styled';

import Participant from '@components/containers/Participant';
import { Spacer } from '@components/layout/Spacer';
import { Box } from '@components/layout/Box';
import { Button } from '@components/common/Button';
import { MicSwitch, CameraSwitch, SettingsSwitch } from '@components/config/ConfigButtons';

const ChatRoom = ({ ...props }) => {
  const { globalState, globalDispatch } = React.useContext(Context);
  const { roomName, userToken } = globalState;
  const [room, setRoom] = React.useState(null);
  const [participants, setParticipants] = React.useState([]);

  console.table([
    ['displayName', globalState.displayName],
    ['userName', globalState.userName],
    ['userToken', globalState.userToken],
    ['roomName', globalState.roomName],
    ['isAudioMuted', globalState.isAudioMuted],
    ['isVideoShown', globalState.isVideoShown],
  ]);

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
    Video.connect(globalState.userToken, {
      name: globalState.roomName,
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
    <Participant key={participant.sid} participant={participant} />
  ));

  /* DEBUGGING TABLE */
  console.table([
    ['displayName', globalState.displayName],
    ['userName', globalState.userName],
    ['userToken', globalState.userToken],
    ['roomName', globalState.roomName],
    ['isAudioMuted', globalState.isAudioMuted],
    ['isVideoShown', globalState.isVideoShown],
  ]);

  return (
    <div className="room">
      <div className="local-participant">
        {room ? (
          <Participant key={room.localParticipant.sid} participant={room.localParticipant} />
        ) : (
          <div>Something is wrong, there are no local participants.</div>
        )}
      </div>
      <h3>Remote Participants</h3>
      <div className="remote-participants">{remoteParticipants}</div>
    </div>
  );
};

export default ChatRoom;
