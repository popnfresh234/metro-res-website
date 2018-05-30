import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Home from '../src/components/home/Home.jsx';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (

      <div className="App">
        <Grid stackable>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Grid>
      </div>
    );
  }
}

export default App;
