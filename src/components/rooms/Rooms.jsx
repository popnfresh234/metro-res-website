import React, { Component } from 'react';
import { Container, Segment, Grid, Image, GridRow, GridColumn } from 'semantic-ui-react';
import ReactRevealText from 'react-reveal-text';
import { Link } from 'react-router-dom';


class Rooms extends Component {
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
                  <Image src="src/images/rooms/rooma.jpg" />
                </GridColumn>
                <GridColumn width={8}>
                  <Image src="src/images/rooms/roomb.jpg" />
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn width={8}>
                  <Image src="src/images/rooms/roomc.jpg" />
                </GridColumn>
                <GridColumn width={8}>
                  <Image src="src/images/rooms/roomd.jpg" />
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn width={8}>
                  <Image src="src/images/rooms/roome.jpg" />
                </GridColumn>
                <GridColumn width={8}>
                  <Image src="src/images/rooms/roomf.jpg" />
                </GridColumn>
              </GridRow>
            </Grid>
          </Segment>
        </Grid.Column>
        <Grid.Column width={13}>
          <Image src="src/images/rooms/rooma.jpg" />
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default Rooms;
