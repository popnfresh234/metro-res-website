import React, { Component } from 'react';
import { Container, Segment, Grid, Image, GridRow, GridColumn } from 'semantic-ui-react';

class Rooms extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      room: 'rooma',
    };
    this.handleImageClick = this.handleImageClick.bind( this );
  }

  handleImageClick( room, e ) {
    e.preventDefault();
    this.setState( {
      room,
    } );
  }
  render() {
    return (
      <Grid.Row>
        <Grid.Column width={3}>
          <Segment>
            <Container fluid text textAlign="left">
              <p>
                Metro Residenecs offers a variety of newly renovated, fully furnished
                rooms including laminate flooring, fridge, desk and task chair, lamp, and
                storage. All rooms have large, screened windows offering light and fresh air.
              </p>
            </Container>
          </Segment>
          <Segment>
            <Grid stackable>
              <GridRow>
                <GridColumn width={8}>
                  <Image as="a" href="" src="src/images/rooms/rooma.jpg" onClick={e => this.handleImageClick( 'rooma', e )} />
                </GridColumn>
                <GridColumn width={8}>
                  <Image as="a" href="" src="src/images/rooms/roomb.jpg" onClick={e => this.handleImageClick( 'roomb', e )} />
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn width={8}>
                  <Image as="a" href="" src="src/images/rooms/roomc.jpg" onClick={e => this.handleImageClick( 'roomc', e )} />
                </GridColumn>
                <GridColumn width={8}>
                  <Image as="a" href="" src="src/images/rooms/roomd.jpg" onClick={e => this.handleImageClick( 'roomd', e )} />
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn width={8}>
                  <Image as="a" href="" src="src/images/rooms/roome.jpg" onClick={e => this.handleImageClick( 'roome', e )} />
                </GridColumn>
                <GridColumn width={8}>
                  <Image as="a" href="" src="src/images/rooms/roomf.jpg" onClick={e => this.handleImageClick( 'roomf', e )} />
                </GridColumn>
              </GridRow>
            </Grid>
          </Segment>
        </Grid.Column>
        <Grid.Column width={13}>
          <Image src={`src/images/rooms/${this.state.room}.jpg`} />
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default Rooms;
