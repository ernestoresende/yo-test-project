import styled from 'styled-components';

export const PageBackdrop = styled.div`
  background: linear-gradient(var(--colors-violet3), var(--colors-yellow3));
  background-size: cover;

  min-height: 100vh;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChatroomHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 5;

  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;

  .time-container {
    background: var(--colors-gray6);
    border: solid 2px var(--colors-blueGray1);
    border-radius: 8px;
    margin: 0 auto;
    padding: var(--spacing-xxxs);
    text-align: center;
    pointer-events: all;
    box-shadow: 3px 3px 2px var(--colors-blueGray1);
  }
`;

export const LogoWrapper = styled.div`
  position: absolute;
  top: 24px;
  left: 24px;
`;

export const MainWrapper = styled.div`
  display: flex;

  .col {
    flex: 1;
  }

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }

  .outer-tile-container {
    width: ${(props) => `${props.horizontalVideoTileWidth}px`};
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 2px 10px hsl(0deg 0% 0% / 14%);
    @media (max-width: 1200px) {
      width: ${(props) =>
        `calc(${props.verticalVideoTileWidth}px - ${props.horizontalVideoTileWidth}px)`};
    }
    @media (max-width: 768px) {
      width: ${(props) =>
        `calc(${props.verticalVideoTileWidth}px - ${props.horizontalVideoTileWidth}px + 100px)`};
    }
    @media (max-width: 480px) {
      width: ${(props) =>
        `calc(${props.verticalVideoTileWidth}px - ${props.horizontalVideoTileWidth}px + 40px)`};
    }
  }

  .inner-tile-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
  }

  .inner-wrapper {
    background: var(--colors-blueGray1);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .video-stream {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  .video-stream-backdrop {
    background: var(--colors-blueGray1);
    padding: 48px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
