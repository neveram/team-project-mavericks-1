//SJSU CMPE 138 Spring 2022 TEAM3 

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArrivalFlightTable from './components/flight/listArrivalFlights';

const Main = () => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [authState, setAuthState] = useState(false);

    return (
        <div>
            {!loading && (
                <>

                        <Router>
                            <Routes>
                                {/* <Route path="/Dashboard"
                                    element={<Dashboard />}
                                />
                                <Route path="/login"
                                    element={<Login />}
                                /> */}
                                <Route path="/arrival-flights"
                                    element={<ArrivalFlightTable />}
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
                
                </>
            )
            }
        </div>
    );
}

export default Main;