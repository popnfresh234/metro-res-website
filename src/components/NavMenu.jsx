import React, { Component } from 'react';
import { Grid, Menu, Item } from 'semantic-ui-react';
import { Route, Switch, Redirect } from 'react-router-dom';


class NavMenu extends Component {
  render() {
    return (
      <Menu className="left-menu" inverted color="blue" fixed="left" style={{ width: '250px' }}>
        <Item>
          <p>test</p>
        </Item>
      </Menu>
    );
  }
}

export default NavMenu;
