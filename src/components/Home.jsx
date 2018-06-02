import React, { Component } from 'react';
import { Container, Card, Segment, Image, Header, Icon } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <div className="container-div" >

        <Card fluid style={{ maxWidth: '700px' }}>
          <Segment compact raised>
            <Image src="src/images/vancouver.jpg" />
          </Segment>
          <Card.Content>
            <Card.Header>
              Welcome to Metro Residences, located in the heart of beautiful Vancouver
            </Card.Header>
            <br />
            <Card.Description>
              <Header as="h5">
                Metro Residences offers the opportunity
            to live in and experience this world class city at an excellent value.
              </Header>

              <Header as="h5">
            Metro Residences can be your safe, secure home away from home, whether
            working or studying. We provide a peaceful, quiet room of your own to
            anybody on a budget needing tidy and comfortable surroundings
              </Header>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <i className="far fa-envelope" />
              <a href="mailto:booking@metro-res.com">  booking@metro-res.com</a>
            </a>
          </Card.Content>
        </Card>

      </div>
    );
  }
}

export default Home;
