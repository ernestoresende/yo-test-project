import { css } from 'styled-components';

export const backgroundColors = css`
  ${(props) => {
    const backgroundColor = props['data-backgroundcolor'];
    return css`
      background-color: ${`var(--colors-${backgroundColor})`};
    `;
  }}
`;

export const textColors = css`
  ${(props) => {
    const textColor = props['data-textcolor'];
    return css`
      color: ${`var(--colors-${textColor})`};
    `;
  }}
`;

export const fontSizes = css`
  ${(props) => {
    const fontSize = props['data-fontsize'];
    return css`
      font-size: ${`var(--fontSize-${fontSize})`};
    `;
  }}
`;

export const fontWeights = css`
  ${(props) => {
    const fontWeight = props['data-fontweight'];
    return css`
      font-weight: ${fontWeight};
    `;
  }}
`;
