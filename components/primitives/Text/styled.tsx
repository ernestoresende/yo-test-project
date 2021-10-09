import styled, { css } from 'styled-components';
import { textColors, fontSizes, fontWeights } from '@styles/mixins';

const CommonStyles = css`
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
