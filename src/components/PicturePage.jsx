import React, { Component } from 'react';
import { Container, Segment, Image, Header, Grid, Button } from 'semantic-ui-react';

class Facilities extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      image: this.props.images[0],
      images: this.props.images,
      thumbs: this.props.thumbs,
    };
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
      index = ( this.state.images.indexOf( this.state.image ) + 1 ) % this.state.images.length;
    } else {
      index = ( ( this.state.images.indexOf( this.state.image ) - 1 )
                + this.state.images.length ) % this.state.images.length;
    }
    this.setState( { image: this.state.images[index] } );
  }

  render() {
    const imageArray = this.state.thumbs.map( ( imagePath, index ) => ( <Image
      spaced
      className="grid-image"
      as="a"
      href=""
      src={`src/images/${this.props.rootPath}/${imagePath}.jpg`}
      onClick={e => this.handleImageClick( this.state.images[index], e )}
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
                <Image src={`src/images/${this.props.rootPath}/${this.state.image}.jpg`} />
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
