import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../src/components/home/Home.jsx';
import NavBar from '../src/components/nav-bar/NavBar.jsx';


class App extends Component {
  render() {
    return (

      <div className="App">
        <NavBar />
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
