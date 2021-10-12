import styled from 'styled-components';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

export const AvatarWrapper = styled.button`
  cursor: pointer;
`;
export const AvatarFallback = styled(AvatarPrimitive.Fallback)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  width: var(--spacing-xxxl);
  height: var(--spacing-xxxl);
  border-radius: 100%;
  background-color: var(--colors-gray5);

  .profile-image {
    height: 200px;
    width: 200px;
    border-radius: 9999px;
  }

  svg {
    color: var(--colors-blueGray1);
    height: var(--spacing-sm);
    width: var(--spacing-sm);
  }
`;
export const PhotoDragUploadWrapper = styled.div`
  background: var(--colors-blueGray6);
  border: dashed 2px var(--colors-blueGray5);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 210px;
  height: 100%;
  padding: var(--spacing-xs);

  svg {
    color: var(--colors-blueGray1);
    height: var(--spacing-sm);
    width: var(--spacing-sm);
  }
`;
export const ImagePresentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .profile-image {
    height: 200px;
    width: 200px;
    border-radius: 9999px;
  }
`;
