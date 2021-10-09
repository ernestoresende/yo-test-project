import styled from 'styled-components';
import { backgroundColors, textColors } from '@styles/mixins';

export const ButtonWrapper = styled.button`
  ${backgroundColors}
  ${textColors}

  border-radius: ${(props) => `${props.borderRadius}px`};
  font-weight: 700;
  cursor: pointer;
  transition: 200ms ease-in-out;

  :focus,
  :hover {
    box-shadow: var(--shadow2);
    opacity: 0.9;
  }

  &[data-uppercase] {
    text-transform: uppercase;
  }

  &[data-size='small'] {
    padding: var(--spacing-nano) var(--spacing-xxxs);
    font-size: var(--fontSize-xxs);
  }

  &[data-size='medium'] {
    padding: var(--spacing-xxxs) var(--spacing-xxs);
    font-size: var(--fontSize-xs);
  }

  &[data-size='large'] {
    padding: var(--spacing-xxs) var(--spacing-xxs);
    font-size: var(--fontSize-xs);
  }
`;
