import React from "react";
import "./app.css";
import EnterPage from "./pages/enterPage/enterPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/mainPage/mainPage";
import SignUp from "./pages/signUp/signUp";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <EnterPage />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/main">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
