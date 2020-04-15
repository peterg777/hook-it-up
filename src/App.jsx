import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';

const App = () => {
    return (
        <Router>
          <Link to="/"><button className="btn btn-warning font-weight-boldnpm start">Home!</button></Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details/:id" component={Details} />
        </Switch>
      </Router>
    );
  }





export default App;