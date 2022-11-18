import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { fetchGateListService,fetchGateListForTerminalService } from '../../services/gateService';

function createData(terminal,gateNumber,gateStatus) {
    return { terminal,gateNumber,gateStatus };
  }
  
  // const rows = [
  //   createData(1,'1A','Enabled'),
  //   createData(1,'1B','Disabled'),
  //   createData(2,'2A','Disabled'),
  //   createData(2,'2B','Enabled'),
  //   createData(3,'3A','Disabled'),
  //   createData(3,'3B','Enabled'),
  // ];
const GateTable = ({currentTerminal}) => {

  // const [selectedTerminal, setSelectedTerminal] = useState(1);
  const [gateListState, setGateListState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");


  // const handleTerminalChange = (e) => {
  //     setSelectedTerminal(e.target.value);
  //   }
    useEffect(() => {
      fetchGateListData();
    }, []);
  
    const fetchGateListData = async () => {
      const serviceResponse = await fetchGateListService();
      if (serviceResponse.status === 200) {
        setGateListState(serviceResponse.data.payload);
        setLoading(false);
      }
      else {
        setOpen(true);
        setMessage('Some error occured while fetching data');
      }
    }
    return (
<Paper elevation={3}>
  { gateListState.filter((row)=>row.terminal == currentTerminal).length>0?(
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Gate</TableCell>
                    <TableCell align="center">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {gateListState.filter((row)=>(row.terminal == currentTerminal)).map((row) => (
                    <TableRow
                      key={row.gate}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="left">{row.gate}</TableCell>
                      <TableCell align="center">{row.status == "disabled"? "Under Maintenance" : row.status}</TableCell>
                      <TableCell >{(row.status == "disabled")?(<Button
                                    style={{ marginBottom: "15px",  marginTop: "15px"  }}
                                    variant={'contained'}
                                    color={'secondary'}
                                >Enable
                                </Button>):(<Button
                                    style={{ marginBottom: "15px",  marginTop: "15px"  }}
                                    variant={'contained'}
                                    color={'secondary'}
                                    disabled={row.status=="inuse"}
                                >Disable
                                </Button>)}
                        </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
 ):((
  <h1 style={{padding: '25px'}}>No Gates</h1>
))} </Paper>
    );
};

export default GateTable;