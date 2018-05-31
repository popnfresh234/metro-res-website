import React, { Component } from 'react';
import { Grid, Menu, Item } from 'semantic-ui-react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavMenu from './components/NavMenu.jsx';


class App extends Component {
  render() {
    return (

      <div className="App">
        <NavMenu />
      </div>
    );
  }
}

export default App;
