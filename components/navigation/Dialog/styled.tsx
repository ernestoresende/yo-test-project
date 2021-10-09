import styled, { css } from 'styled-components';
import * as DialogPrimitive from '@radix-ui/react-dialog';

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
  border-radius: 12px;
  box-shadow: var(--shadow1);

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: var(--spacing-xs);

  @media (prefers-reduced-motion: no-preference) {
    animation: content-show 150ms cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform;
  }

  :focus {
    outline: none;
  }
`;
