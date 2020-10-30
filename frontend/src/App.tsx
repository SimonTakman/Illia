import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Home} from './routes/Home'
import {GetStarted} from './routes/GetStarted'
import {Help} from './routes/Help'
import { UnderConstruction } from "./routes/UnderConstruction";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/help">
            <Help/>
          </Route>
          <Route path="/evening">
            <UnderConstruction/>
          </Route>
          <Route path="/calendar">
            <UnderConstruction/>
          </Route>
          <Route path="/morning">
            <Home />
          </Route>
          <Route path="/">
            <GetStarted />
          </Route>
        </Switch>
    </Router>
  );
}