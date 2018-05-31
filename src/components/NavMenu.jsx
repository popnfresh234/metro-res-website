import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';


class NavMenu extends Component {
  constructor( props ) {
    super( props );
    this.handleItemClick = this.handleItemClick.bind( this );
  }

  handleItemClick( name, e ) {
    e.preventDefault();
    this.setState( {
      activeItem: name,
    } );
  }
  render() {
    const activeItem = this.state;
    return (
      <Menu className="left-menu" widths={1} inverted color="blue" fixed="left" style={{ width: '250px' }}>
        <Menu.Item

          name="editorials"
          active={activeItem === 'editorials'}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}

export default NavMenu;
