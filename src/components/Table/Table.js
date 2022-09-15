import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";

export default function ClientTable({ rows }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Cliente</TableCell>
            <TableCell>Veiculo</TableCell>
            <TableCell>Proprietário</TableCell>
            <TableCell>Distância</TableCell>
            <TableCell>Idade</TableCell>
            <TableCell>Whatsapp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows &&
            rows.length > 0 &&
            rows.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index}
                </TableCell>
                <TableCell>{row.vehicle}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.distance}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.phone}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
