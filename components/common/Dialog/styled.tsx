import styled, { css } from 'styled-components';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { mediaMaxWidth } from '@styles/media';

const OverlayShow = css`
  @keyframes overlay-show {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }
`;

const ContentShow = css`
  @keyframes content-show {
    0% {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.96);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

export const StyledDialogOverlay = styled(DialogPrimitive.Overlay)`
  ${OverlayShow}
  background-color: rgba(0, 0, 0, 0.44);
  position: fixed;
  inset: 0;
  @media (prefers-reduced-motion: no-preference) {
    animation: overlay-show 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

export const StyledDialogContent = styled(DialogPrimitive.Content)`
  ${ContentShow};
  background: var(--colors-gray6);
  border-radius: 8px;
  border: solid 2px var(--colors-blueGray1);
  padding: var(--spacing-sm);

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 650px;
  max-height: 85vh;

  .close-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: var(--spacing-xxs);
    width: var(--spacing-xxs);
    color: var(--colors-orange1);
    position: absolute;
    top: 10px;
    right: 10px;

    svg {
      height: var(--spacing-xxs);
      width: var(--spacing-xxs);
    }
  }

  ${mediaMaxWidth.phablet`
    padding: var(--spacing-xxs);
  `}

  @media (prefers-reduced-motion: no-preference) {
    animation: content-show 150ms cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform;
  }

  :focus {
    outline: none;
  }
`;
