// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TrainSchedulePage from './TrainSchedulePage';
import TrainDetailsPage from './TrainDetailsPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={TrainSchedulePage} />
        <Route path="/train/:id" component={TrainDetailsPage} />
      </Switch>
    </Router>
  );
};

export default App;
