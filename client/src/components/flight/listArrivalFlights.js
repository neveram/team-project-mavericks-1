import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(source, airline, flightNumber, time, terminal, gate, baggage) {
  return { source, airline, flightNumber, time, terminal, gate, baggage };
}

const rows = [
  createData('ABC', "Emirates", "A", "12:30", 2, 3, 4),
  createData('EFG', "Quatar", "B", "12:32", 2, 3, 4),
  createData('QWE', "Air India", "D", "11:30", 2, 3, 4),
  createData('CDS', "Air India", "A", "10:30", 2, 3, 4),
  createData('KAI', "KLM", "F", "12:30", 2, 3, 4),
];

export default function ArrivalFlightTable() {
  console.log("Heyyey")
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>From</TableCell>
            <TableCell align="right">Ariline</TableCell>
            <TableCell align="right">Flight Number</TableCell>
            <TableCell align="right">Time of Arrival</TableCell>
            <TableCell align="right">Terminal</TableCell>
            <TableCell align="right">Gate</TableCell>
            <TableCell align="right">Baggage Claim</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.flightNumber}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.source}
              </TableCell>
              <TableCell align="right">{row.airline}</TableCell>
              <TableCell align="right">{row.flightNumber}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.terminal}</TableCell>
              <TableCell align="right">{row.gate}</TableCell>
              <TableCell align="right">{row.baggage}</TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
