import React from "react";
import DataTable from "react-data-table-component";
import movies from "../data/movies";
import "../styles/table.css";

const ReeactTableComponent = () => {
  const columns = [
    {
      name: "Title",
      selector: "title",
      sortable: true,
    },
    {
      name: "Directior",
      selector: "director",
      sortable: true,
    },
    {
      name: "Runtime (m)",
      selector: "runtime",
      sortable: true,
      right: true,
    },
  ];
  return (
    <div className="card table-wrapper">
      <DataTable
        title="Movies"
        columns={columns}
        data={movies}
        defaultSortField="title"
        pagination
        dense
      />
    </div>
  );
};

export default ReeactTableComponent;
