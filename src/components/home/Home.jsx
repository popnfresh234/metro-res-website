import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import ReactRevealText from 'react-reveal-text';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <Grid.Row>
        <Grid.Column width={4}>
          <p>Left Home Page</p>
        </Grid.Column>
        <Grid.Column width={12}>
          <p>Right Home Page</p>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default Home;
