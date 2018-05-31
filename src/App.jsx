import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavMenu from './components/NavMenu.jsx';
import Home from './components/Home.jsx';
import Rooms from './components/Rooms.jsx';
import Facilities from './components/Facilities.jsx';

class App extends Component {
  render() {
    return (

      <div className="App">
        <Grid stackable>
          <Grid.Row id="grid-row" >
            <Grid.Column color="blue" width={3} style={{ paddingRight: '0px' }}>
              <NavMenu />
            </Grid.Column>
            <Grid.Column width={13}>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/rooms" exact component={Rooms} />
                <Route path="/facilities" exact component={Facilities} />
              </Switch>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
