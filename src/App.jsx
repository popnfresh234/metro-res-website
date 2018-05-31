import React, { Component } from 'react';
import { Grid, Menu, Item } from 'semantic-ui-react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavMenu from './components/NavMenu.jsx';


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
              <p> test </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
