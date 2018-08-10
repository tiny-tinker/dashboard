import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/**
 * Import Scenes
 */
import Dashboard from './Home/Home';

const App = () => (
  <main>
    <Router>
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>
  </main>
);

export default App;
