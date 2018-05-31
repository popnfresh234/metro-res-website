import React, { Component } from 'react';
import { Container, Segment, Image, Header } from 'semantic-ui-react';

class Rooms extends Component {
  render() {
    const imageStyle = {
      marginBottom: '0px',
    };
    return (
      <div className="container-div">
        <Segment compact raised>
          <Image src="src/images/rooms/rooma.jpg" />
        </Segment>
        <Segment compact raised>
          <Image as="a" href="" floated="left" style={imageStyle} src="src/images/rooms/thumba.jpg" />
          <Image as="a" href="" floated="left" style={imageStyle} src="src/images/rooms/thumbb.jpg" />
          <Image as="a" href="" floated="left" style={imageStyle} src="src/images/rooms/thumbc.jpg" />
          <Image as="a" href="" floated="left" style={imageStyle} src="src/images/rooms/thumbd.jpg" />
          <Image as="a" href="" floated="left" style={imageStyle} src="src/images/rooms/thumbe.jpg" />
          <Image as="a" href="" floated="left" style={{ marginRight: '0px' }} src="src/images/rooms/thumbf.jpg" />
        </Segment>
      </div>
    );
  }
}

export default Rooms;
