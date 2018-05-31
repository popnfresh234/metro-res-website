import React, { Component } from 'react';
import ReactRevealText from 'react-reveal-text';
import { Menu, Link } from 'semantic-ui-react';


class NavMenu extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      activeItem: 'home',
    };
    this.handleItemClick = this.handleItemClick.bind( this );
  }

  componentDidMount() {
    setTimeout( () => {
      this.setState( { show: true } );
    }, 700 );
  }

  handleItemClick( e, { name } ) {
    this.setState( {
      activeItem: name,
    } );
  }


  render() {
    const { activeItem } = this.state;
    const revealStyle = {
      padding: '1em',
      color: '#FFFFFF',
      letterSpacing: '4px',
      fontSize: '14px',
      fontWeight: '300',
      lineHeight: '14px',
    };

    return (
      <div>

        <Menu size="huge" className="left-menu" fluid vertical inverted color="blue">
          <ReactRevealText
            text="Metro Residences"
            show={this.state.show}
            className=""
            style={revealStyle}
          />
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
