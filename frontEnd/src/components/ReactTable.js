import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import MOCK_DATA from "../data/MOCK_DATA.json";
import Table from "react-bootstrap/Table";
import { COLUMNS } from "./columns";
import {
  PaginationWrapper,
  Button,
  Range,
  RowLabel,
  PageList,
} from "../styles/pagination-styles";
import "../styles/table.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faStepBackward,
  faStepForward,
} from "@fortawesome/free-solid-svg-icons";
import Select from "../styles/Select";
import TableHeader from "../styles/TableHeader";
import { ThemeProvider } from "styled-components";
import { createStyles } from '../styles/style';

const ReactTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const customStyles = {}
  const theme = 'default'
  const currentTheme = useMemo(() => createStyles(customStyles, theme), [customStyles, theme]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 15 },
    },
    usePagination
  );
  const { pageIndex, pageSize } = state;

  const select = (
    <Select
      onChange={(e) => setPageSize(Number(e.target.value))}
      defaultValue={pageSize}
    >
      {[15, 25, 50].map((pageSize) => (
        <option key={pageSize} value={pageSize}>
          {pageSize}
        </option>
      ))}
    </Select>
  );

  return (
    <>
    <TableHeader title="Members" />
      <div className="table-wrapper">
        {/* <ThemeProvider theme={currentTheme}> */}
          
          <Table {...getTableProps()} striped bordered hover size="sm">
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        {/* </ThemeProvider> */}
      </div>

      <PaginationWrapper>
        <>
          <RowLabel>Go to page:</RowLabel>
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            style={{ width: "40px" }}
          />
        </>
        {/* <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[15, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select> */}
        <>
          <RowLabel>Rows per page:</RowLabel>
          {select}
        </>
        <Range>
          {pageIndex + 1} of {pageOptions.length}
          {/* Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "} */}
        </Range>
        <PageList>
          <Button
            type="button"
            aria-label="Previous Page"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            <FontAwesomeIcon icon={faStepBackward} />
          </Button>
          <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </Button>
          <Button onClick={() => nextPage()} disabled={!canNextPage}>
            <FontAwesomeIcon icon={faAngleRight} />
          </Button>
          <Button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            <FontAwesomeIcon icon={faStepForward} />
          </Button>
        </PageList>
      </PaginationWrapper>
    </>
  );
};

export default ReactTable;
