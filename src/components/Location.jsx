import React, { Component } from 'react';

import { Container, Segment, Image, Header } from 'semantic-ui-react';

class Location extends Component {
  render() {
    return (
      <div className="container-div">
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
        <Segment compact raised>
          <Container text>
            <Header as="h5">
                Located in the heart of one of Vancouver's most historic neighbourhoods,
                from Metro Residences it is a 5 minute bus ride to the center of downtown Vancouver
            </Header>
            <Header as="h5">
                Metro Residences is situated two stops away from a major transit hub leading to UBC,
                SFU, the North Shore, Richmond, and YVR Airport.
            </Header>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default Location;
