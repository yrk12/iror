import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import './files.css'

const columns = [
  { field: "id", headerName: "Train ID", width: 100 },
  { field: "source", headerName: "Source", width: 150 },
  {
    field: "destination",
    headerName: "Destination",
    width: 130,
  },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 130,
  },
  {
    field: "no_of_passengers",
    headerName: "No of Passengers",
    type: "number",
    width: 180,
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

export default function AllTrain() {
  return (
    <div>
        <br/>
        <h3>All Bookings</h3>
        <br/>
      <div style={{ height: 400, width: "100%" }}>
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
