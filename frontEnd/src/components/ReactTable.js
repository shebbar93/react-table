import React, { useMemo } from "react";
import {
  useTable,
  usePagination,
  useSortBy,
  useFilters,
  useAsyncDebounce,
} from "react-table";
import MOCK_DATA from "../data/MOCK_DATA.json";
import matchSorter from "match-sorter";
import Table from "react-bootstrap/Table";
import { COLUMNS } from "./columns";
import {
  PaginationWrapper,
  Button,
  Range,
  RowLabel,
  PageList,
  Span,
} from "../styles/pagination-styles";
import "../styles/table.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faStepBackward,
  faStepForward,
  faSortDown,
  faSortUp,
} from "@fortawesome/free-solid-svg-icons";
import Select from "../styles/Select";
import TableHeader from "../styles/TableHeader";
import { ThemeProvider } from "styled-components";
import { createStyles } from "../styles/style";

const ReactTable = ({title}) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const customStyles = {};
  const theme = "default";
  //   const onChange = useAsyncDebounce((value) => {
  //     setGlobalFilter(value || undefined);
  //   }, 200);
  const currentTheme = useMemo(
    () => createStyles(customStyles, theme),
    [customStyles, theme]
  );
  function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
  }) {
    const count = preFilteredRows.length;

    return (
      <input
        value={filterValue || ""}
        onChange={(e) => {
          setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
        }}
        placeholder={`Search ${count} records...`}
      />
    );
  }
  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );
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
      defaultColumn,
      initialState: { pageIndex: 0, pageSize: 15 },
    },
    useFilters,
    useSortBy,
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
      {title && <TableHeader title={title}/>}
      <div className="table-wrapper">
        {/* <ThemeProvider theme={currentTheme}> */}

        <Table {...getTableProps()} striped bordered hover size="sm">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <div>
                      {column.canFilter ? column.render("Filter") : null}
                    </div>
                    <Span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <FontAwesomeIcon icon={faSortDown} />
                        ) : (
                          <FontAwesomeIcon icon={faSortUp} />
                        )
                      ) : (
                        ""
                      )}
                    </Span>
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
