import React, { Component } from 'react';
import { Menu, Grid } from 'semantic-ui-react';
import ReactRevealText from 'react-reveal-text';
import { Link } from 'react-router-dom';


class Home extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      activeItem: 'home',
    };
    this.handleItemClick = this.handleItemClick.bind( this );
  }

  handleItemClick( e, { name } ) {
    this.setState( {
      activeItem: name,
    } );
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Menu size="huge" inverted color="blue" stackable >
        <Menu.Item name="home" active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item name="rooms" active={activeItem === 'rooms'} onClick={this.handleItemClick} />
        <Menu.Item name="facilities" active={activeItem === 'facilities'} onClick={this.handleItemClick} />
        <Menu.Item name="location" active={activeItem === 'location'} onClick={this.handleItemClick} />
        <Menu.Item name="gallery" active={activeItem === 'gallery'} onClick={this.handleItemClick} />
        <Menu.Item name="contact" active={activeItem === 'contact'} onClick={this.handleItemClick} />
      </Menu>
    );
  }
}

export default Home;
