import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Insights from './components/Insights';
import Userprofile from './components/Userprofile';
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/insights">Main Board</Link>
            </li>
            <li>
              <Link to="/userprofile">User Profile</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/insights">
            <Insights/>
          </Route>
          <Route path="/userprofile">
            <Userprofile/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
