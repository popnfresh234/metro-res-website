import React, { Component } from 'react';
import ReactRevealText from 'react-reveal-text';
import { Menu, Link } from 'semantic-ui-react';


class NavMenu extends Component {
  constructor( props ) {
    super( props );
    this.handleItemClick = this.handleItemClick.bind( this );
  }

  handleItemClick( e, { name } ) {
    this.setState( {
      activeItem: name,
    } );
  }

  render() {
    const activeItem = this.state;
    const revealStyle = {
      color: '#0096EE',
      letterSpacing: '4px',
      fontSize: '38px',
      fontWeight: '300',
      lineHeight: '43px',
    };

    return (
      <div>
        <ReactRevealText
          text="Metro Residences"
          show={this.state.show}
          className=""
          style={revealStyle}
        />
        <Menu className="left-menu" vertical inverted color="blue" fixed="left" style={{ width: '250px' }}>
          <Menu.Item as={Link} to="/" name="home" active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item as={Link} to="/" name="rooms" active={activeItem === 'rooms'} onClick={this.handleItemClick} />
          <Menu.Item as={Link} to="/" name="facilities" active={activeItem === 'facilities'} onClick={this.handleItemClick} />
          <Menu.Item as={Link} to="/" name="location" active={activeItem === 'location'} onClick={this.handleItemClick} />
          <Menu.Item as={Link} to="/" name="gallery" active={activeItem === 'gallery'} onClick={this.handleItemClick} />
          <Menu.Item as={Link} to="/" name="contact" active={activeItem === 'contact'} onClick={this.handleItemClick} />
        </Menu>
      </div>
    );
  }
}

export default NavMenu;
