import React, { Component } from 'react';
import { Container, Segment, Image, Header, Grid, Button } from 'semantic-ui-react';

class Rooms extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      room: 'rooma',
    };
    this.rooms = ['rooma', 'roomb', 'roomc', 'roomd', 'roome', 'roomf'];
    this.handleImageClick = this.handleImageClick.bind( this );
    this.handleArrowClick = this.handleArrowClick.bind( this );
  }

  handleImageClick( room, e ) {
    e.preventDefault();
    this.setState( {
      room,
    } );
  }

  handleArrowClick( increase ) {
    let index = 0;
    if ( increase ) {
      index = ( this.rooms.indexOf( this.state.room ) + 1 ) % this.rooms.length;
    } else if ( this.rooms.indexOf( this.state.room ) - 1 >= 0 ) {
      index = this.rooms.indexOf( this.state.room ) - 1;
    } else {
      index = this.rooms.length - 1;
    }
    this.setState( { room: this.rooms[index] } );
  }

  render() {
    return (
      <div className="container-div">
        <Segment compact raised>
          <Grid stackable verticalAlign="middle" textAlign="center">
            <Grid.Row>
              <Grid.Column width={2}>
                <Button circular icon="arrow left" onClick={() => this.handleArrowClick()} />
              </Grid.Column>
              <Grid.Column width={12}>
                <Image src={`src/images/rooms/${this.state.room}.jpg`} />
              </Grid.Column>
              <Grid.Column width={2}>
                <Button circular icon="arrow right" onClick={() => this.handleArrowClick( 'positive' )} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment compact raised>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Image spaced className="room-image" as="a" href="" src="src/images/rooms/thumba.jpg" onClick={e => this.handleImageClick( 'rooma', e )} />
                <Image spaced className="room-image" as="a" href="" src="src/images/rooms/thumbb.jpg" onClick={e => this.handleImageClick( 'roomb', e )} />
                <Image spaced className="room-image" as="a" href="" src="src/images/rooms/thumbc.jpg" onClick={e => this.handleImageClick( 'roomc', e )} />
                <Image spaced className="room-image" as="a" href="" src="src/images/rooms/thumbd.jpg" onClick={e => this.handleImageClick( 'roomd', e )} />
                <Image spaced className="room-image" as="a" href="" src="src/images/rooms/thumbe.jpg" onClick={e => this.handleImageClick( 'roome', e )} />
                <Image spaced className="room-image" as="a" href="" src="src/images/rooms/thumbf.jpg" onClick={e => this.handleImageClick( 'roomf', e )} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
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
