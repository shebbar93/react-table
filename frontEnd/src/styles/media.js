import { css } from "styled-components";

export const SMALL = 599;
export const MEDIUM = 959;
export const LARGE = 1280;

export const media = {
  sm: (literals, ...args) => css`
    @media screen and (max-width: ${SMALL}px) {
      ${css(literals, ...args)}
    }
  `,
  md: (literals, ...args) => css`
    @media screen and (max-width: ${MEDIUM}px) {
      ${css(literals, ...args)}
    }
  `,
  lg: (literals, ...args) => css`
    @media screen and (max-width: ${LARGE}px) {
      ${css(literals, ...args)}
    }
  `,
  custom:
    (value) =>
    (literals, ...args) =>
      css`
        @media screen and (max-width: ${value}px) {
          ${css(literals, ...args)}
        }
      `,
};
