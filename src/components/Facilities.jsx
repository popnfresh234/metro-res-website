import React, { Component } from 'react';
import { Container, Segment, Image, Header, Grid, Button } from 'semantic-ui-react';

class Facilities extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      image: 'halla',
    };
    this.images = ['kitchena', 'livinga', 'kitchenb', 'batha', 'bathb', 'bathc', 'halla', 'kitchene'];
    this.thumbs = ['thumbkitchena', 'thumblivinga', 'thumbkitchenb', 'thumbbatha', 'thumbbathb', 'thumbbathc', 'thumbhalla', 'thumbkitchene'];
    this.handleImageClick = this.handleImageClick.bind( this );
    this.handleArrowClick = this.handleArrowClick.bind( this );
  }

  handleImageClick( image, e ) {
    e.preventDefault();
    this.setState( {
      image,
    } );
  }

  handleArrowClick( increase ) {
    let index = 0;
    if ( increase ) {
      index = ( this.images.indexOf( this.state.image ) + 1 ) % this.images.length;
    } else {
      index = ( ( this.images.indexOf( this.state.image ) - 1 )
                + this.images.length ) % this.images.length;
    }
    this.setState( { image: this.images[index] } );
  }

  render() {
    const imageArray = this.thumbs.map( ( imagePath, index ) => ( <Image
      spaced
      className="room-image"
      as="a"
      href=""
      src={`src/images/facilities/${imagePath}.jpg`}
      onClick={e => this.handleImageClick( this.images[index], e )}
      key={imagePath}
    /> ) );
    return (
      <div className="container-div">
        <Segment compact raised>
          <Grid stackable verticalAlign="middle" textAlign="center">
            <Grid.Row>
              <Grid.Column width={2}>
                <Button circular icon="arrow left" onClick={() => this.handleArrowClick()} />
              </Grid.Column>
              <Grid.Column width={12}>
                <Image src={`src/images/facilities/${this.state.image}.jpg`} />
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
                {imageArray}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment compact raised>
          <Container text>
            <Header as="h4">
                Welcome to our shared community; including a bright airy kitchen,
                washer/dryer, comfortable common room where you can enjoy a new 40 inch
                LCD TV, cable, and wireless internet. Large outside deck is a fun
                spot to play ping pong, have picnics, or just read in the sun.
                The back yard is a large space in which gardeners can grow their favourite plants
            </Header>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default Facilities;
