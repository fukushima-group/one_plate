import { css } from "styled-components";

/* スクリーンサイズが375px以下の場合に適用 */
export const sp = (first) => css`
  @media (max-width: 375px) {
    ${css(first)}
  }
`;

/* スクリーンサイズが768px以上、1024以下の場合に適用 */
export const tab = (first) => css`
  @media (min-width: 768px) and (max-width: 1024px) {
    ${css(first)}
  }
`;

/* スクリーンサイズが1025px以上の場合に適用 */
export const pc = (first) => css`
  @media (min-width: 1025px) {
    ${css(first)}
  }
`;
