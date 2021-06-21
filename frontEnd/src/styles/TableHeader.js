import React from "react";
import styled from "styled-components";

const TableHeader = ({ title }) => {
  const TableHeaderStyle = styled.div`
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    fontsize: 22px;
    color: rgba(0, 0, 0, 0.87);
    backgroundcolor: #ffffff;
    minheight: 56px;
    paddingleft: 16px;
    paddingright: 8px;
  `;

  const Title = styled.div`
    flex: 1 0 auto;
    color: rgba(0, 0, 0, 0.87);
    font-size: 22px;
    font-weight: 400;
  `;
  return (
    <TableHeaderStyle className="rdt_TableHeader" role="heading" aria-level={1}>
      <Title>{title}</Title>
    </TableHeaderStyle>
  );
};

export default TableHeader;
