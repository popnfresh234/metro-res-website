import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../src/components/home/Home.jsx';
import Room from '../src/components//rooms/Rooms.jsx';
import NavBar from '../src/components/nav-bar/NavBar.jsx';


class App extends Component {
  render() {
    return (

      <div className="App">
        <NavBar />
        <Grid padded stackable>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rooms" exact component={Room} />
          </Switch>
        </Grid>
      </div>
    );
  }
}

export default App;
