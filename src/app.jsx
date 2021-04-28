// import React from 'react';
import styles from "./app.module.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Login from "./pages/login/login";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path=""></Route>
      </Switch>
    </Router>
  );
}

export default App;
