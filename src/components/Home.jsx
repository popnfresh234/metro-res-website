import React, { Component } from 'react';
import { Container, Segment, Image, Header } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <div style={{ paddingTop: '1em' }}>
        <Segment raised compact >
          <Image src="src/images/vancouver.jpg" />
        </Segment>
        <Segment raised compact>
          <Container textAlign="left">
            <Header as="h1">
            Welcome to Metro Residences, located in the heart of beautiful Vancouver.
            </Header>

            <Header as="h5">
            Metro Residences offers the opportunity
            to live in and experience this world class city at an excellent value.
            </Header>
            <Header as="h5">
            Metro Residences can be your safe, secure home away from home, whether
            working or studying. We provide a peaceful, quiet room of your own to
            anybody on a budget needing tidy and comfortable surroundings
            </Header>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default Home;
