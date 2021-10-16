import styled from 'styled-components';

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 5;

  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 110px;
`;
export const ConfigWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  background: var(--colors-gray6);
  border: solid 2px var(--colors-blueGray1);
  border-radius: 8px;
  margin: 0 auto;
  padding: var(--spacing-xxxs);
  text-align: center;
  pointer-events: all;
  box-shadow: 3px 3px 2px var(--colors-blueGray1);
`;
