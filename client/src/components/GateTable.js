import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function createData(terminal,gateNumber,gateStatus) {
    return { terminal,gateNumber,gateStatus };
  }
  
  const rows = [
    createData(1,'1A','Enabled'),
    createData(1,'1B','Disabled'),
    createData(2,'2A','Disabled'),
    createData(2,'2B','Enabled'),
    createData(3,'3A','Disabled'),
    createData(3,'3B','Enabled'),
  ];
const GateTable = ({currentTerminal}) => {
    return (
<Paper elevation={3}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Gate</TableCell>
                    <TableCell align="center">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.filter((row)=>(row.terminal == currentTerminal)).map((row) => (
                    <TableRow
                      key={row.gate}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="left">{row.gateNumber}</TableCell>
                      <TableCell align="center">{row.gateStatus == "Disabled"? "Under Maintenance" : row.gateStatus}</TableCell>
                      <TableCell >{(row.gateStatus == "Disabled")?(<Button
                                    style={{ marginBottom: "15px",  marginTop: "15px"  }}
                                    variant={'contained'}
                                    color={'secondary'}
                                >Enable
                                </Button>):(<Button
                                    style={{ marginBottom: "15px",  marginTop: "15px"  }}
                                    variant={'contained'}
                                    color={'secondary'}
                                >Disable
                                </Button>)}
                        </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
        </Paper>
    );
};

export default GateTable;