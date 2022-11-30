import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import { Box, CircularProgress, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { fetchTerminalListService } from '../../services/terminalService';
import GateTable from './GateTable';
import { useNavigate } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import { addBagCarouselService,fetchBagCarouselListService } from '../../services/bagCarouselService';
import { fetchArrivalFlightListBasedOnBagCarouselService } from '../../services/flightService';
import FlightTable from '../flight/FlightTable';

const BagCarousel = () => {

    const [flightListState, setFlightListState] = useState([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
  
    const handleSnackbarClose = () => {
      setOpen(false);
    }
  
    const redirectToDashboard = () => {
      navigate("/dashboard")
    }
  
    useEffect(() => {
      fetchFlightListData();
    }, []);
  
    const fetchFlightListData = async () => {
      const serviceResponse = await fetchArrivalFlightListBasedOnBagCarouselService();
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
        <div style={{color: "white", backgroundColor: "#48C9B0"}}>
          <h2>Arrival Flights List for Baggage Assignment</h2>
        </div>
        {loading ? 
          (
            <CircularProgress color="success" />
          ) :
          (
            <div>
              <FlightTable flightListState={flightListState} bagAssign={true}/>
            </div>
          )
        }
        <br></br>
        <div style={{justifyContent: 'center'}}>
          <Button variant="contained" onClick={redirectToDashboard}>
            Back to Dashboard
          </Button>
        </div>
      </React.Fragment>
    );
};

export default BagCarousel;