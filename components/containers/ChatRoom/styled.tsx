import styled from 'styled-components';
import { mediaMaxWidth } from '@styles/media';

export const OutterWrapper = styled.div`
  background: var(--colors-violet6);
  height: 100vh;
`;

export const MainWrapper = styled.div`
  max-width: 1800px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 70px);
  overflow: hidden;

  ${mediaMaxWidth.tablet`
    display: block;
  `}

  .video-participant {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
`;

export const VideoWrapper = styled.div`
  display: block;
  padding: 8px;
  width: -webkit-fill-available;
  width: -moz-fill-available;
  ${mediaMaxWidth.bigDesktop`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const RemoteParticipant = styled.div`
  box-shadow: 4px 4px 1px var(--colors-blueGray1);
  background: var(--colors-blueGray1);
  border: 4px solid var(--colors-blueGray1);
  height: 100%;
  width: 100%;
  border-radius: 15px;
  ${mediaMaxWidth.tablet`
    width: 100%;
    display: block;
  `}
`;

export const LocalParticipant = styled.div`
  box-shadow: 4px 4px 1px var(--colors-blueGray1);
  border: 4px solid var(--colors-blueGray1);
  background: var(--colors-blueGray1);
  height: 100%;
  width: 100%;
  border-radius: 15px;
  ${mediaMaxWidth.tablet`
    display: block;
    width: 100%;
  `}
`;
