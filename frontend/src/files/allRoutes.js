import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./files.css";

const columns = [
  { field: "id", headerName: "Serial No", type: "number", width: 100 },
  { field: "station_name", headerName: "Station Name", width: 150 },
  {
    field: "arrival_time",
    headerName: "Arrival Time",
    type: "date",
    width: 130,
  },
  {
    field: "departure_time",
    headerName: "Departure Time",
    type: "date",
    width: 130,
  },
  {
    field: "distance",
    headerName: "Distance",
    type: "number",
    width: 90,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function AllRoutes() {
  return (
    <div>
      <br />
      <h3>All Routes</h3>
      <br />
      <div style={{ height: 400, width: "100%"}}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </div>
  );
}
