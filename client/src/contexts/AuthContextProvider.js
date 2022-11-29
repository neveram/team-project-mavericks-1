import { CircularProgress } from '@mui/material';
import React,{useState, createContext, useEffect} from 'react';

//Creating a context using 'createContext'
export const AuthContext = createContext(null);

const AuthContextProvider = ({children}) =>{
  console.log("Rendered Parent");
  //Boolean value that would simply indicate whether User is signed in or nor
  const [authState, setAuthState] = useState(false);

  //Object to store other user details like name, email, etc
  const [userDetails, setUserDetails] = useState({});

  const [authLoadingState, setAuthLoadingState] = useState(true);

  const setUserDetailsLocally = (user) => {
    setUserDetails(user)
    window.localStorage.setItem("user", JSON.stringify(user));
  }

  const fetUserDetailsLocally = async () => {
    let user = window.localStorage.getItem("user");
    if(user === null){
      setAuthState(false);
      setAuthLoadingState(false);
      return
    }
    user = await JSON.parse(user);
    setAuthState(true);
    setAuthLoadingState(false);
    setUserDetails(user);
  }

  useEffect(() => {
    fetUserDetailsLocally();
  },[authState, authLoadingState])

  // Passing all the state and state change functions to all the components down in the tree, for them to get access of THIS component's state 

  return(
    <div>
    { authLoadingState  ? 
      (
        <CircularProgress/>

      ) :
      (
        <AuthContext.Provider value={[authLoadingState, authState, setAuthState, userDetails, setUserDetails, setUserDetailsLocally]}>
          {children}
        </AuthContext.Provider>
      )
    }
    </div>
  );
}

export default AuthContextProvider;

//<AuthContext.Provider value={[authLoadingState, authState, setAuthState, userDetails, setUserDetails, setUserDetailsLocally]}>
      //   {children}
      // </AuthContext.Provider>