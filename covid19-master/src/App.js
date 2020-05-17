import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'
import HomePage from './components/HomePage/HomePage'
import AboutPage from './components/about/about'
import DataPage from './components/data/data'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/project/:id' component={ProjectDetails} />
        <Route path='/about' component={AboutPage} />
        <Route path='/data' component={DataPage} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/create' component={CreateProject} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
