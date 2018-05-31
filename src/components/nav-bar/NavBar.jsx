import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
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
        <Menu size="huge" inverted color="blue" stackable >
          <Menu.Item as={Link} to="/" name="home" active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item as={Link} to="/rooms" name="rooms" active={activeItem === 'rooms'} onClick={this.handleItemClick} />
          <Menu.Item name="facilities" active={activeItem === 'facilities'} onClick={this.handleItemClick} />
          <Menu.Item name="location" active={activeItem === 'location'} onClick={this.handleItemClick} />
          <Menu.Item name="gallery" active={activeItem === 'gallery'} onClick={this.handleItemClick} />
          <Menu.Item name="contact" active={activeItem === 'contact'} onClick={this.handleItemClick} />
        </Menu>
      </div>
    );
  }
}

export default Home;
