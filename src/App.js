import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Dashboard from "./components/dashboard/dashboard";
import ProjectDetails from './components/projects/projectdetails';
import SignIn from './components/auth/signin'
import SignUp from './components/auth/signup'
import CreateProject from './components/projects/createproject'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/project/:id' component={ProjectDetails} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/create' component={CreateProject} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
