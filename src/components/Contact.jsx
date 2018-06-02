import React, { Component } from 'react';
import { Card, Image, Icon, Header, Divider, Segment } from 'semantic-ui-react';

class Contact extends Component {
  render() {
    return (
      <div className="container-div" >
        <Segment compact raised>
          <Card fluid>
            <Image src="/src/images/gallery/gallerya.jpg" />
            <Card.Content>
              <Card.Header>
                Metro Residences
              </Card.Header>
              <Card.Meta>
                Rooms are available from 500-600 per month
              </Card.Meta>
              <br />
              <Card.Description>
                <Header as="h5">
              Address
                </Header>
                531 East Georgia St.
                V6A-1Z8
                Vancouver, BC, Canada
              </Card.Description>
              <br />
              <Card.Description>
                <Header as="h5">
              Phone
                </Header>
                604 722 3413
              </Card.Description>
              <br />
              <Card.Description>
                <Header as="h5" style={{ marginBottom: '0px' }}>
              Email
                </Header>
                <a href="mailto:booking@metro-res.com">booking@metro-res.com</a>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
        22 Friends
              </a>
            </Card.Content>
          </Card>
        </Segment>
      </div>
    );
  }
}

export default Contact;
