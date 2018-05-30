import React, { Component } from 'react';
import { Container, Segment, Grid } from 'semantic-ui-react';
import ReactRevealText from 'react-reveal-text';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <Grid.Row>
        <Grid.Column width={3}>
          <Segment>
            <Container fluid text textAlign="justified">
              <p>
              Welcome to Metro Residences, located in the heart of beautiful Vancouver.
              </p>
              <p>
              Metro Residences offers the opportunity to live in and experience this
              world class city at an excellent value.
              </p>
              <p>
              Metro Residences can be your safe, secure home away from home, whether
              working or studying. We provide a peaceful, quiet room of your own to anybody on a
              budget needing tidy and comfortable surroundings
              </p>
            </Container>
          </Segment>
        </Grid.Column>
        <Grid.Column width={13}>
          <p>Right Home Page</p>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default Home;
