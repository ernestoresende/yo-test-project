import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  &:after {
    color: var(--colors-violet1);
    content: '>';
    pointer-events: none;
    font-size: 28px;
    font-weight: 600;
    position: relative;
    bottom: 30px;
    margin-left: calc(100% - 35px);
    transform: rotate(90deg);
  }
`;
export const InputLabel = styled.label`
  transition: 150ms ease-in-out;
  padding-bottom: 4px;
  color: var(--colors-blueGray3);
  font-size: var(--fontSize-xs);
  font-weight: 700;
`;
export const SelectComponent = styled.select`
  appearance: none;
  cursor: pointer;
  font-weight: 600;
  padding: 12px 18px;
  width: 100%;
  border: 2px solid;
  border-radius: 25px;
  border-color: var(--colors-violet1);
  color: var(--colors-violet1);
  background: var(--colors-gray6);
  transition: 150ms ease-in-out;
  :focus {
    outline: none;
    box-shadow: var(--shadow2);
    border-color: var(--colors-violet2);
  }
  ::-ms-expand {
    display: none;
  }
`;
