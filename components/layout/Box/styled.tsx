import styled from 'styled-components';

export const StyledBox = styled.div`
  &[data-center] {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &[data-flex] {
    display: flex;
  }

  &[data-direction='row'] {
    flex-direction: row;
  }

  &[data-direction='column'] {
    flex-direction: column;
  }
`;
