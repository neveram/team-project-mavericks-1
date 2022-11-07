import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Box, CircularProgress, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { fetchFlightListService } from '../services/flightService';
import GateTable from './GateTable';

function createData(terminal) {
    return { terminal};
  }
  
  const rows = [
    createData(1),
    createData(2),
    createData(3),
  ];
  

const AirportGates = () => {
    const [selectedTerminal, setSelectedTerminal] = useState(1);
    const [flightListState, setFlightListState] = useState([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
  

    const handleTerminalChange = (e) => {
        setSelectedTerminal(e.target.value);
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
        {/* <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          message={message}
        /> */}
        <div>
          <h1>Gate List</h1>
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
                  <InputLabel id="demo-simple-select-label">Airport Terminals</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedTerminal}
                    label="Airport Terminal"
                    onChange={handleTerminalChange}
                  >
                    {rows.map((row)=>(
                    <MenuItem value={row.terminal}>Terminal {row.terminal}</MenuItem>                      
                    ))}
                    {/* <MenuItem value={2}>Terminal 2</MenuItem>
                    <MenuItem value={3}>Terminal 3</MenuItem> */}
                  </Select>
                </FormControl>
              </Box>
              </div>
              <GateTable currentTerminal={selectedTerminal}/>
            </div>
          )
        }
        
      </React.Fragment>
    );
};

export default AirportGates;