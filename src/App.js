import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appoitment from './components/Appoitment/Appoitment/Appoitment';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/appointment">
          <Appoitment></Appoitment>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
