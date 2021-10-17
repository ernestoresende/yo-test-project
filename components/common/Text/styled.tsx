import styled, { css } from 'styled-components';
import { textColors, fontSizes, fontWeights } from '@styles/mixins';

const CommonStyles = css`
  line-height: 1.4;
  &[data-center] {
    text-align: center;
  }
  ${textColors}
  ${fontSizes}
  ${fontWeights}
`;

export const Paragraph = styled.p`
  ${CommonStyles}
`;
export const Span = styled.span`
  ${CommonStyles}
`;
