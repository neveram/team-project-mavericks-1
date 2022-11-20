//SJSU CMPE 138 Spring 2022 TEAM3 

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FlightForm from './components/flight/FlightForm';
import ArrivalFlightTable from './components/flight/ArrivalFlightsTable';
import ArilineFlightsTable from './components/flight/AirlineFlightsTable';
import Login from './components/user/Login';
import AuthContext from './contexts/AuthContextProvider';
import PrivatePath from './components/PrivatePath';
import AirportGates from './components/AirportGates';
import GateTable from './components/GateTable';


const Main = () => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);
    const [authState, setAuthState] = useState(false);

    return (
        <div>
            {!loading && (
                <>
                    <AuthContext>
                        <Router>
                            <Routes>
                                {/* <Route path="/Dashboard"
                                    element={<Dashboard />}
                                />*/}
                                <Route path="/login"
                                    element={<Login />}
                                /> 
                                <Route path="/arrival-flights"
                                    element={<ArrivalFlightTable />}
                                />
                                <Route path="/flight/new"
                                    element={<FlightForm />}
                                />
                                <Route path="/airline-flights" element={
                                    <PrivatePath>
                                        <ArilineFlightsTable/>
                                    </PrivatePath>
                                }></Route>
                                
                                <Route path="/airport-gates"
                                    element={<AirportGates/>}
                                />
                                <Route path="/gates"
                                    element={<GateTable/>}
                                    />
                                {/* <Route path="project/:id"
                                    element={<PrivateRoute path="project/:id"
                                        element={<CreateProject />}
                                    />}
                                />
                                <Route path="project_list/manager/:manager_id"
                                    element={<PrivateRoute path="project_list/manager/:manager_id"
                                        element={<ProjectList />}
                                    />}
                                />
                                <Route path="component/:id"
                                    element={<PrivateRoute path="component/:id"
                                        element={<CreateComponent />}
                                    />}
                                />

                                <Route path="component_list/project/:project_id"
                                    element={<PrivateRoute path="component_list/project/:project_id"
                                        element={<ComponentList source={'project'} />}
                                    />}
                                />

                                <Route path="component_list/testlead/:testlead_id"
                                    element={<PrivateRoute path="component_list/testlead/:testlead_id"
                                        element={<ComponentList source={'testlead'} />}
                                    />}
                                />
                                <Route path="testCase/:id"
                                    element={<PrivateRoute path="testCase/:id"
                                        element={<CreateTestCase />}
                                    />}
                                />

                                <Route path="testCase_list/component/:component_id"
                                    element={<PrivateRoute path="testCase_list/component/:component_id"
                                        element={<TestCaseList source={'component'} />}
                                    />}
                                />

                                <Route path="testCase_list/tester/:tester_id"
                                    element={<PrivateRoute path="testCase_list/tester/:tester_id"
                                        element={<TestCaseList source={'tester'} />}
                                    />}
                                />

                                <Route path="admin/project/"
                                    element={<PrivateRoute path="admin/project/"
                                        element={<AdminAnalysisProject />}
                                    />}
                                />
                                <Route path="admin/testCase/"
                                    element={<PrivateRoute path="admin/testCase/"
                                        element={<AdminAnalysisTestCase />}
                                    />}
                                />
                                <Route path="bug_list/developer/:developer_id"
                                    element={<PrivateRoute path="bug_list/developer/:developer_id"
                                        element={<BugList source={'developer'}/>}
                                    />}
                                /> */}
                            </Routes>
                        </Router>
                        </AuthContext>
                </>
            )
            }
        </div>
    );
}

export default Main;