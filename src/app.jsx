// import React from 'react';
import styles from "./app.module.css";
import EnterPage from "./pages/enterPage/enterPage";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import LoginPage from "./pages/loginPage/loginPage";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <EnterPage />
        </Route>
        <Route exact path=""></Route>
      </Switch>
    </Router>
  );
}

export default App;
