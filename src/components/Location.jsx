import React, { Component } from 'react';

import { Card, Segment, Header } from 'semantic-ui-react';

class Location extends Component {
  render() {
    return (
      <div className="container-div" >
        <Card fluid style={{ maxWidth: '700px' }}>
          <Segment compact raised>
            <iframe
              width="600"
              height="450"
              frameBorder="0"
              title="Map"
              allowFullScreen
              src="https://www.google.com/maps/embed/v1/place?q=531%20east%20georgia%20vancouver&key=AIzaSyCxk-bmYPiSw9rIhgM5ndoNcVpRXpeIswE"
            />
          </Segment>
          <Card.Content>
            <Header as="h5">
                Located in the heart of one of Vancouver's most historic neighbourhoods,
                from Metro Residences it is a 5 minute bus ride to the center of downtown Vancouver
            </Header>
            <Header as="h5">
                Metro Residences is situated two stops away from a major transit hub leading to UBC,
                SFU, the North Shore, Richmond, and YVR Airport.
            </Header>
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

export default Location;
