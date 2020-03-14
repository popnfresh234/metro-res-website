import React, { Component } from 'react';
import { Card, Image, Header, Segment } from 'semantic-ui-react';
import { PayPalButton } from 'react-paypal-button-v2';

class Contact extends Component {
  render() {
    return (
      <div className="container-div" >

        <Card fluid style={{ maxWidth: '700px' }}>
          <Segment compact raised>
            <Image src="/assets/images/gallery/gallerya.jpg" />
          </Segment>
          <Card.Content>
            <Card.Header>
                Metro Residences
            </Card.Header>
            <Card.Meta>
                Rooms are available from 600-700 per month
            </Card.Meta>
            <br />
            <Card.Description>
              <Header as="h5">
              Address
              </Header>
                531 East Georgia St.
                V6A-1Z8
                Vancouver, BC, Canada
            </Card.Description>
            <br />
            <Card.Description>
              <Header as="h5">
              Phone
              </Header>
                604 722 3413
            </Card.Description>
            <br />
            <Card.Description>
              <Header as="h5" style={{ marginBottom: '0px' }}>
                  Email
              </Header>
              <a href="mailto:booking@metro-res.com">booking@metro-res.com</a>
            </Card.Description>
            <br />
            {/* PayPal Button for Paying Rent/Deposit */}
            <Card.Description>
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="2SBDLZRVNXP98" />
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <input type="hidden" name="on0" value="price options" />
                        <Header>Pay Online!</Header>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <select name="os0">
                          <option value="Option 600.00">$600.00 </option>
                          <option value="Option 500.00">$500.00 </option>
                          <option value="Option $200.00 deposit">$200.00 deposit </option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                <img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
              </form>
            </Card.Description>

          </Card.Content>
        </Card>


      </div>
    );
  }
}

export default Contact;
