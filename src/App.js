import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appoitment from './components/Appoitment/Appoitment/Appoitment';
import Login from './components/Login/Login/Login';
import { createContext, useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AllPatients from './components/AllPatients/AllPatients/AllPatients';
import AddDoctor from './components/AddDoctor/AddDoctor/AddDoctor';
import PrivateRoute from './components/Login/Privateroute/PrivateRoute';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/appointment">
          <Appoitment></Appoitment>
        </Route>
        <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
        {/* <Route path="/dashboard/appotment">
          <Dashboard></Dashboard>
        </Route> */}
        <Route path="/dashboard/AllPatients">
          <AllPatients></AllPatients>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/addDoctor">
          <AddDoctor></AddDoctor>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
