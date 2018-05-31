import React, { Component } from 'react';
import { Menu, Link } from 'semantic-ui-react';


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
      <Menu className="left-menu" vertical inverted color="blue" fixed="left" style={{ width: '250px' }}>
        <Menu.Item as={Link} to="/" name="home" active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item as={Link} to="/" name="rooms" active={activeItem === 'rooms'} onClick={this.handleItemClick} />
        <Menu.Item as={Link} to="/" name="facilities" active={activeItem === 'facilities'} onClick={this.handleItemClick} />
        <Menu.Item as={Link} to="/" name="location" active={activeItem === 'location'} onClick={this.handleItemClick} />
        <Menu.Item as={Link} to="/" name="gallery" active={activeItem === 'gallery'} onClick={this.handleItemClick} />
        <Menu.Item as={Link} to="/" name="contact" active={activeItem === 'contact'} onClick={this.handleItemClick} />
      </Menu>
    );
  }
}

export default NavMenu;
