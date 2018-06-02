import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavMenu from './components/NavMenu.jsx';
import Home from './components/Home.jsx';
import PicturePage from './components/PicturePage.jsx';
import Location from './components/Location.jsx';
import Utils from './components/Utils';


class App extends Component {
  render() {
    console.log( Utils.FACILITY_THUMBS );
    return (

      <div className="App">
        <Grid stackable>
          <Grid.Row id="grid-row" >
            <Grid.Column color="blue" width={3} style={{ paddingRight: '0px' }}>
              <NavMenu />
            </Grid.Column>
            <Grid.Column width={13}>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route
                  path="/rooms"
                  key="rooms"
                  exact
                  render={props =>
                    ( <PicturePage
                      {...props}
                      rootPath="rooms"
                      caption={Utils.ROOM_CAPTION}
                      images={Utils.ROOM_IMAGES}
                      thumbs={Utils.ROOM_THUMBS}

                    /> )}
                />
                <Route
                  path="/facilities"
                  key="facilities"
                  exact
                  render={props =>
                    ( <PicturePage
                      {...props}
                      rootPath="facilities"
                      caption={Utils.FACILITY_CAPTION}
                      images={Utils.FACILITY_IMAGES}
                      thumbs={Utils.FACILITY_THUMBS}

                    /> )}
                />
                <Route path="/location" exact component={Location} />
                <Route
                  path="/gallery"
                  key="gallery"
                  exact
                  render={props =>
                    ( <PicturePage
                      {...props}
                      rootPath="gallery"
                      images={Utils.GALLERY_IMAGES}
                      thumbs={Utils.GALLERY_THUMBS}

                    /> )}
                />
              </Switch>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
