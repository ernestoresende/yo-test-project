import styled from 'styled-components';

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  svg {
    color: var(--colors-violet1);
    width: 36px;
    height: 36px;
  }
`;

export const SelectComponent = styled.select`
  cursor: pointer;
  font-weight: 600;
  padding: 8px 14px;
  width: 100%;
  border: 2px solid;
  border-radius: 15px;
  border-color: var(--colors-violet1);
  color: var(--colors-violet1);
  background: var(--colors-gray6);
  transition: 150ms ease-in-out;
  :focus {
    outline: none;
    box-shadow: var(--shadow2);
    border-color: var(--colors-violet2);
  }
`;
