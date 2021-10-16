import { Context } from '@store/GlobalStateProvider';
import * as React from 'react';
import Video from 'twilio-video';

type ParticipantProps = {
  participant: any;
  _videoClass?: string;
  _audioClass?: string;
  isRemoteParticipant?: boolean;
};

const Participant = ({ participant, _videoClass, isRemoteParticipant }: ParticipantProps) => {
  const [videoTracks, setVideoTracks] = React.useState([]);
  const [audioTracks, setAudioTracks] = React.useState([]);
  const { globalState } = React.useContext(Context);

  const videoRef = React.useRef();
  const audioRef = React.useRef();

  const trackpubsToTracks = (trackMap) =>
    Array.from(trackMap.values())
      .map((publication: any) => publication.track)
      .filter((track) => track !== null);

  React.useEffect(() => {
    const trackSubscribed = (track) => {
      if (track.kind === 'video') {
        setVideoTracks((videoTracks) => [...videoTracks, track]);
      } else {
        setAudioTracks((audioTracks) => [...audioTracks, track]);
      }
    };

    const trackUnsubscribed = (track) => {
      if (track.kind === 'video') {
        setVideoTracks((videoTracks) => videoTracks.filter((v) => v !== track));
      } else {
        setAudioTracks((audioTracks) => audioTracks.filter((a) => a !== track));
      }
    };

    setVideoTracks(trackpubsToTracks(participant.videoTracks));
    setAudioTracks(trackpubsToTracks(participant.audioTracks));

    participant.on('trackSubscribed', trackSubscribed);
    participant.on('trackUnsubscribed', trackUnsubscribed);

    return () => {
      setVideoTracks([]);
      setAudioTracks([]);
      participant.removeAllListeners();
    };
  }, [participant]);

  React.useEffect(() => {
    const videoTrack = videoTracks[0];
    if (videoTrack) {
      videoTrack.attach(videoRef.current);
      return () => {
        videoTrack.detach();
      };
    }
  }, [videoTracks]);

  React.useEffect(() => {
    const audioTrack = audioTracks[0];
    if (audioTrack) {
      audioTrack.attach(audioRef.current);
      return () => {
        audioTrack.detach();
      };
    }
  }, [audioTracks]);

  /* Handles the user changing the video device in the middle of the call */
  React.useEffect(() => {
    /* If the videoTracks are available and the participant is Local, creates a localVideoTrack
    using the provided deviceId for the video device. */
    if (videoTracks && !isRemoteParticipant) {
      Video.createLocalVideoTrack({
        deviceId: { exact: globalState.videoInputDevice },
      }).then(function (localVideoTrack) {
        /* Don't unpublish tracks if there are none yet */
        participant.unpublishTracks(videoTracks);
        if (videoTracks[0]) {
          videoTracks[0].detach();
        }
        participant.publishTrack(localVideoTrack);
        localVideoTrack.attach(videoRef.current);
      });
    }
  }, [globalState.videoInputDevice]);

  /* Handles the user changing the audio device in the middle of the call */
  React.useEffect(() => {
    /* If the videoTracks are available and the participant is Local, creates a localVideoTrack
    using the provided deviceId for the video device. */
    if (audioTracks && !isRemoteParticipant) {
      Video.createLocalAudioTrack({
        deviceId: { exact: globalState.audioInputDevice },
      }).then(function (localAudioTrack) {
        participant.unpublishTracks(audioTracks);
        /* Don't unpublish tracks if there are none yet */
        if (audioTracks[0]) {
          audioTracks[0].detach();
        }

        participant.publishTrack(localAudioTrack);
        localAudioTrack.attach(audioRef.current);
      });
    }
  }, [globalState.audioInputDevice]);

  return (
    <React.Fragment>
      <video ref={videoRef} autoPlay={true} disablePictureInPicture className={_videoClass} />
      <audio ref={audioRef} autoPlay={true} muted={isRemoteParticipant ? false : true} />
    </React.Fragment>
  );
};

export default Participant;
