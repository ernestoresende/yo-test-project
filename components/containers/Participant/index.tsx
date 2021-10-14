import * as React from 'react';

type ParticipantProps = {
  participant: any;
  _videoClass?: string;
  _audioClass?: string;
};

const Participant = ({ participant, _videoClass, _audioClass }: ParticipantProps) => {
  const [videoTracks, setVideoTracks] = React.useState([]);
  const [audioTracks, setAudioTracks] = React.useState([]);

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

  console.log(videoTracks);
  console.log(audioTracks);

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

  return (
    <React.Fragment>
      <video ref={videoRef} autoPlay={true} disablePictureInPicture className={_videoClass} />
      <audio ref={audioRef} autoPlay={true} muted={true} className={_audioClass} />
    </React.Fragment>
  );
};

export default Participant;
