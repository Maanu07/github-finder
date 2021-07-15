import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Alert from "./components/Alert";
import About from "./components/pages/About";
import User from "./components/pages/User";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import PageNotFound from "./components/pages/PageNotFound";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' exact component={About}></Route>
                <Route path='/user/:login' exact component={User} />
                <Route path='*'>{PageNotFound}</Route>
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
