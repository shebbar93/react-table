import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const SelectControl = styled.select`
  cursor: pointer;
  height: 24px;
  max-width: 100%;
  user-select: none;
  padding-left: 8px;
  padding-right: 24px;
  box-sizing: content-box;
  font-size: inherit;
  color: inherit;
  border: none;
  background-color: transparent;
  appearance: none;
  direction: ltr;
  flex-shrink: 0;

  &::-ms-expand {
    display: none;
  }

  &:disabled::-ms-expand {
    background: #f60;
  }

  option {
    color: initial;
  }
`;

const SelectWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
  font-size: inherit;
  color: inherit;
  margin-top: 1px;

  svg {
    top: 0;
    right: 0;
    color: inherit;
    position: absolute;
    fill: currentColor;
    width: 24px;
    height: 24px;
    display: inline-block;
    user-select: none;
    pointer-events: none;
  }
`;
const Select = ({ defaultValue, onChange, ...rest }) => {
  return (
    <SelectWrapper>
      <SelectControl
        onChange={onChange}
        defaultValue={defaultValue}
        {...rest}
      />
      <FontAwesomeIcon icon={faCaretDown} />
    </SelectWrapper>
  );
};

export default Select;
