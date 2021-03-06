import styled, { css } from 'styled-components';
import { textColors, fontSizes, fontWeights } from '@styles/mixins';

const DefaultStyles = css`
  &[data-center] {
    text-align: center;
  }
  ${textColors}
  ${fontSizes}
  ${fontWeights}
`;

export const Heading1 = styled.h1`
  ${DefaultStyles};
`;
export const Heading2 = styled.h2`
  ${DefaultStyles};
`;
export const Heading3 = styled.h3`
  ${DefaultStyles};
`;
export const Heading4 = styled.h4`
  ${DefaultStyles};
`;
export const Heading5 = styled.h5`
  ${DefaultStyles};
`;
export const Heading6 = styled.h6`
  ${DefaultStyles};
`;
