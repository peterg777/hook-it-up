import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';

const App = () => {
    return (
        <Router>
            <>
            <p><Link to="/"><button className="btn btn-warning font-weight-bold">Home!</button></Link></p>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details/:id" component={Details} />
        </Switch>
        </>
      </Router>
    );
  }





export default App;