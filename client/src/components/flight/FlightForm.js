import React, { useState, useEffect, useContext } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import { useNavigate } from 'react-router-dom';
import { CardHeader } from '@mui/material';
import { checkEmptyFields } from '../../services/formValidationService';
import { Paper } from '@mui/material';
import { addFlightService } from '../../services/flightService';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
const styles = {
  paperContainer: {
      backgroundImage: `url(${Image})`,

    height: "100vh"
  }
};


const FlightForm = () => {

    // need to get from user context
  
  const [flightState, setFlightState] = useState({airlineId: 1});
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
  }, [])

  const handleFormChange = (e) => {
    
    setFlightState({
      ...flightState,
      [e.target.name]: e.target.value
    });
  }

  const handleDateChange = (e) => {
    
    setFlightState({
        ...flightState,
        timeOfFlight: e,
      });
  }

  const handleSubmit = async (e) => {
    setFlightState({
      ...flightState,
      time_of_flight: dayjs(flightState.time_of_flight).format('DD/MM/YYYY hh:ss'),
    });

    if (checkEmptyFields(flightState) === true) {
      const serviceResponse = await addFlightService(flightState);
      if (serviceResponse.status === 200) {
        setOpen(true);
        setMessage('Operation Successfull');
        setTimeout(() => { navigate('/airline-flights'); }, 2500)

      }
      else {
        setOpen(true);
        setMessage('Some Error Occured');
      }
    }
    else {
      setOpen(true);
      setMessage('Please Fill out all the fields');
    }


  }

  const handleClose = () => {
    setOpen(false);
  }
  return (
    <React.Fragment>
      <Paper style={styles.paperContainer}>
        {/* </Paper> */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
      />
      {loading ? (
        <CircularProgress color="success" />

      ) : (

        <>
          <div style={{ display: 'flex', justifyContent: 'center'}}>
            <Card variant="outlined" sx={{width: '80%'}}>
              <CardHeader title="FlightDetails">

              </CardHeader>
              <CardContent>
                <Stack spacing={3}>
                <TextField
                  id="flight_number"
                  name="flightNumber"
                  label="Number"
                  fullWidth
                  autoComplete="Source"
                  variant="standard"
                  onChange={handleFormChange}
                  value={flightState.flightNumber}
                  backgroundColor="#21b6ae"
                />
                <TextField
                  id="source"
                  name="source"
                  label="Soure"
                  fullWidth
                  autoComplete="Source"
                  variant="standard"
                  onChange={handleFormChange}
                  value={flightState.source}
                />
                <TextField
                  id="destination"
                  name="destination"
                  label="Destination"
                  fullWidth
                  autoComplete="Source"
                  variant="standard"
                  onChange={handleFormChange}
                  value={flightState.destination}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                    label="Date&Time picker"
                    value={flightState.timeOfFlight}
                    onChange={handleDateChange}
                    renderInput={(params) => <TextField {...params} />}
                />
                </LocalizationProvider>
                </Stack>
              </CardContent>
              <CardActions style={{justifyContent:'center'}}>
                <Button style={{backgroundColor: "#21b6ae"}} variant={'contained'} onClick={handleSubmit}>Submit</Button>
              </CardActions>
            </Card>
          </div>
          <Button style={{marginTop: '15px',  backgroundColor: "#21b6ae", margin: "15px"}}variant={'contained'} onClick={() => {navigate(-1)}}>Go Back</Button>
        </>


      )}

     </Paper>
    </React.Fragment>);

}

export default FlightForm;
