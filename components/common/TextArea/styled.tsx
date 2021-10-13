import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 80px;
`;
export const TextAreaLabel = styled.label`
  transition: 150ms ease-in-out;
  padding-bottom: 4px;
  color: var(--colors-blueGray3);
  font-size: var(--fontSize-xs);
  font-weight: 700;
  &[data-focused='true'] {
    color: var(--colors-blueGray1);
  }
`;
export const TextAreaWrapper = styled.div`
  display: flex;
  align-items: center;
  transition: 150ms ease-in-out;
  border-width: 2px;
  border-style: solid;
  border-radius: 12px;
  border-color: var(--colors-blueGray3);
  min-height: var(--spacing-md);
  &[data-focused='true'] {
    box-shadow: var(--shadow2);
    border-color: var(--colors-blueGray2);
  }

  &[data-disabled='true'] {
    opacity: 0.8;
  }
`;
export const TextAreaComponent = styled.textarea`
  color: var(--colors-blueGray1);
  font-size: var(--fontSize-xs);
  border-radius: 12px;
  padding: 12px 12px;
  width: 100%;
  height: var(--spacing-xxxl);
  border: none;
  border-color: none;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: var(--colors-blueGray3);
  }
`;
