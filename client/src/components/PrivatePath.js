import React, {useContext} from 'react'
import {AuthContext} from '../contexts/AuthContextProvider';
import { Navigate, useLocation } from 'react-router-dom';
const PrivatePath = ({children}) => {

  //Used to store the current location, so that it can be redirected back to this component after login
  const location = useLocation()

  //Reads the context value
  const authContext = useContext(AuthContext);

  const [authState] = authContext;
  
  return(
    <>
    {/*If the authState is true, i.e. if user is logged in, render the `children` component from `props` else, navigate to Login component */}
      {authState ? (<>{children}</>) : (
        <Navigate to="/login" state={{ from: location }} replace />
      ) }
    </>
  )

}

export default PrivatePath;