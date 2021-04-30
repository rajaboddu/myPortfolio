import React from 'react'
import Landing from './components/Landing';
import NavigationBar from './components/NavigationBar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './pages/About';
import './index.css'
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/about' component={About} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/services' component={Services} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
