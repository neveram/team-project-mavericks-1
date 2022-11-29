//SJSU CMPE 138 Spring 2022 TEAM3 

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FlightForm from './components/flight/FlightForm';
import FlightTablePage from './components/flight/FlightTablePage';
import AirlineFlightsTable from './components/flight/AirlineFlightsTable';
import Login from './components/user/Login';
import AuthContext from './contexts/AuthContextProvider';
import PrivatePath from './components/PrivatePath';
import AirportGates from './components/airport/AirportGates';
import GateTable from './components/airport/GateTable';
import TerminalForm from './components/airport/TerminalForm';
import GateForm from './components/airport/GateForm';
import Dashboard from './components/Dashboard';


const Main = () => {
    return (
        <div>
            <AuthContext>
                <Router>
                    <Routes>
                        <Route path="/dashboard"
                            element={<Dashboard />}
                        /> 
                        <Route path="/login"
                            element={<Login />}
                        /> 
                        <Route path="/arrival-flights"
                            element={<FlightTablePage status={'arrival'}/>}
                        />
                        <Route path="/departure-flights"
                            element={<FlightTablePage status={'departure'}/>}
                        />
                        <Route path="/flight/new"
                            element={<FlightForm />}
                        />
                            <Route path="/terminal/new"
                            element={<TerminalForm />}
                        />
                        <Route path="/terminal/:id"
                            element={<TerminalForm />}
                        />
                        <Route path="/gate/:id"
                            element={<GateForm />}
                        />
                        <Route path="/flight/update/:id"
                            element={
                                <PrivatePath>
                                    <FlightForm />
                                </PrivatePath>
                            }
                        />
                        <Route path="/airline-flights" element={
                            <PrivatePath>
                                <AirlineFlightsTable/>
                            </PrivatePath>
                        }></Route>


                        
                        <Route path="/airport-gates"
                            element={<AirportGates/>}
                        />
                        <Route path="/gates"
                            element={<GateTable/>}
                            />
                        
                    </Routes>
                </Router>
            </AuthContext>
        </div>
    );
}

export default Main;