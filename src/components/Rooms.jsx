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
        <Segment compact raised>
          <Container text>
            <Header as="h4">
        Metro Residenecs offers a variety of newly renovated,
        fully furnished rooms including laminate flooring,
        fridge, desk and task chair, lamp, and storage.
        All rooms have large, screened windows offering light and fresh air.
            </Header>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default Rooms;
