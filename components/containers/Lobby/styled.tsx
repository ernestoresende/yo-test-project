import styled from 'styled-components';
import { mediaMaxWidth } from '@styles/media';

export const DialogBoxWrapper = styled.div`
  background-color: var(--colors-gray6);
  padding: var(--spacing-sm);
  margin: var(--spacing-xxxs);
  border: solid 2px var(--colors-blueGray1);
  border-radius: 8px;

  box-shadow: 6px 6px 2px var(--colors-blueGray1);
  max-width: 1000px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaMaxWidth.tablet`
    flex-direction: column-reverse;  
    padding: var(--spacing-xxs);
  `}
`;

export const FormWrapper = styled.form`
  width: 100%;
  max-width: 450px;
  padding: 0 var(--spacing-sm);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${mediaMaxWidth.phablet`
    padding: 0; 
  `}
`;

export const IllustrationWrapper = styled.div`
  width: 100%;
  svg {
    width: 100%;
    height: auto;

    ${mediaMaxWidth.tablet`
      height: 220px;  
    `}
  }
`;
