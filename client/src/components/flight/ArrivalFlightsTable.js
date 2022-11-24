import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import { Box, CircularProgress, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { fetchFlightListService } from '../../services/flightService';
import FlightTable from './FlightTable';

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



const ArrivalFlightTable = ()  => {

  const [intervalState, setIntervalState] = useState(1);
  const [flightListState, setFlightListState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSnackbarClose = () => {
    setOpen(false);
  }


  const handleIntervalChange = (e) => {
    setIntervalState(e.target.value);
  }

  useEffect(() => {
    fetchFlightListData();
  }, []);

  const fetchFlightListData = async () => {
    const serviceResponse = await fetchFlightListService();
    if (serviceResponse.status === 200) {
      setFlightListState(serviceResponse.data.payload);
      setLoading(false);
    }
    else {
      setOpen(true);
      setMessage('Some error occured while fetching data');
    }
  }
  return (
    <React.Fragment>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={message}
      />
      <div>
        <h1>Flight List</h1>
      </div>
      {loading ? 
        (
          <CircularProgress color="success" />
        ) :
        (
          <div>
            <div style={{padding: "25px"}}>
            <Box sx={{ minWidth: 120, maxWidth: 200 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Duration</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={intervalState}
                  label="Time Interval"
                  onChange={handleIntervalChange}
                >
                  <MenuItem value={1}>1 hour</MenuItem>
                  <MenuItem value={2}>2 hours</MenuItem>
                  <MenuItem value={4}>3 hours</MenuItem>
                </Select>
              </FormControl>
            </Box>
            </div>
            <FlightTable flightListState={flightListState}/>
          </div>
        )
      }
      
    </React.Fragment>
  );
}

export default ArrivalFlightTable;


{/* <Paper elevation={3}>
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
                      key={flight_number}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {source}
                      </TableCell>
                      <TableCell align="right">{row.airline}</TableCell>
                      <TableCell align="right">{row.flight_number}</TableCell>
                      <TableCell align="right">{row.time_of_flight}</TableCell>
                      <TableCell align="right">{"A"}</TableCell>
                      <TableCell align="right">{"B"}</TableCell>
                      <TableCell align="right">{"C"}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            </Paper> */}