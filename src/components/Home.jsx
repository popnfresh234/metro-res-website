import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { Route, Switch, Redirect } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <Grid.Row>
        <Grid.Column color="red" width={4}>
          <p> Left </p>
        </Grid.Column>

        <Grid.Column width={12}>
          <p> Right </p>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default Home;
