import React, { Component } from 'react';
import ReactRevealText from 'react-reveal-text';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class NavMenu extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      show: false,
    };
  }

  componentDidMount() {
    setTimeout( () => {
      this.setState( { show: true } );
    }, 700 );
  }


  render() {
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
          <Menu.Item as={NavLink} exact to="/" name="home" onClick={this.handleItemClick} />
          <Menu.Item as={NavLink} to="/rooms" name="rooms" onClick={this.handleItemClick} />
          <Menu.Item as={NavLink} to="/facilities" name="facilities" onClick={this.handleItemClick} />
          <Menu.Item as={NavLink} to="/location" name="location" onClick={this.handleItemClick} />
          <Menu.Item as={NavLink} to="/gallery" name="gallery" onClick={this.handleItemClick} />
          <Menu.Item as={NavLink} to="/contact" name="contact" onClick={this.handleItemClick} />
        </Menu>
      </div>
    );
  }
}

export default NavMenu;
