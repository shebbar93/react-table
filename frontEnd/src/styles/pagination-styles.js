import styled from "styled-components";
import { media } from "./media";

export const PaginationWrapper = styled.nav`
  display: flex;
  flex: 1 1 auto;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  padding-right: 8px;
//   padding-left: 8px;
  width: 100%;
  font-size: 13px;
  min-height: 56px;
  // border-top-style: solid;
  border-top-width: 1px;
  color: rgb(100, 100, 100);
  background-color: #ffffff;
  border-top-color: rgba(0, 0, 0, 0.12);
`;

export const Button = styled.button`
  position: relative;
  display: block;
  user-select: none;
  border: none;
  borderRadius: 50%;
  height: 40px;
  width: 40px;
  padding: 8px;
  cursor: pointer;
  transition: 0.4s;
  background-color: transparent;
//   color: rgba(0,0,0,.54);
//   fill: rgba(0,0,0,.54);
`;

export const Span = styled.span`
  flex-shrink: 1;
  user-select: none;
`;

export const Range = styled(Span)`
  margin: 0 24px;
`;

export const RowLabel = styled(Span)`
  margin: 0 4px;
`;

export const PageList = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  white-space: nowrap;
  ${media.sm`
    width: 100%;
    justify-content: space-around;
  `};
`;
