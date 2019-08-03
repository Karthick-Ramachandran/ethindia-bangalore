import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home'
import Portfolio from './components/Portfolio';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/home" component={Portfolio}/>
      </Switch>
      
    </Router>
  );
}

export default App;
