import { backgroundColors, textColors } from '@styles/mixins';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: ${(props) => `${props.buttonSize}px`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledConfigButton = styled.button`
  ${backgroundColors};
  width: ${(props) => `${props.buttonSize}px`};
  height: ${(props) => `${props.buttonSize}px`};
  border-radius: 9999px;
  cursor: pointer;
  transition: 200ms ease-in-out;

  display: flex;
  justify-content: center;
  align-items: center;

  :focus,
  :hover {
    box-shadow: var(--shadow1);
    opacity: 0.9;
  }
`;

export const IconLabel = styled.span`
  font-size: var(--fontSize-xxxs);
  font-weight: 600;
  text-align: center;
`;

export const IconWrapper = styled.div`
  svg {
    ${textColors};
    width: ${(props) => `${props.iconSize}px`};
    height: ${(props) => `${props.iconSize}px`};
  }
`;
