import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { formatDate } from '../../services/dateService';

const FlightTable = ({flightListState}) => {
    
    return(
        <Paper elevation={3}>
          {flightListState.length > 0 ? (
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
                  {flightListState.map((row) => (
                    <TableRow
                      key={row.flight_number}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.source}
                      </TableCell>
                      <TableCell align="right">{row.airline}</TableCell>
                      <TableCell align="right">{row.flight_number}</TableCell>
                      <TableCell align="right">{formatDate(new Date(row.time_of_flight))}</TableCell>
                      <TableCell align="right">{"A"}</TableCell>
                      <TableCell align="right">{"B"}</TableCell>
                      <TableCell align="right">{"C"}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ): (
            <h1 style={{padding: '25px'}}>No Flights</h1>
          )}
            
        </Paper>
    )

}

export default FlightTable;
