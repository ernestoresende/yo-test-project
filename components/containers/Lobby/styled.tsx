import styled from 'styled-components';
import { mediaMaxWidth } from '@styles/media';

export const Background = styled.div`
  background: linear-gradient(var(--colors-violet3), var(--colors-yellow3));
  height: 100vh;
  width: 100vw;
  z-index: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaMaxWidth.phablet`
    overflow: hidden;
    height: initial;
    padding: var(--spacing-xxs);
    display: block;
  `}
`;
export const DialogBoxWrapper = styled.div`
  background-color: var(--colors-gray6);
  margin: var(--spacing-xxs);
  padding: var(--spacing-sm);
  border: solid 2px var(--colors-blueGray1);
  border-radius: 8px;

  box-shadow: 6px 6px 2px var(--colors-blueGray1);
  max-width: 1000px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaMaxWidth.phablet`
    margin: 0;
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

    ${mediaMaxWidth.phablet`
      height: 220px;  
    `}
  }
`;
