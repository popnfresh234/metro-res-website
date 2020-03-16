import React, { Component } from 'react';
import { Card, Image, Header, Segment } from 'semantic-ui-react';

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
                Rooms are available from $700.00 per month
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
                <input type="hidden" name="cmd" value="_xclick" />
                <input type="hidden" name="business" value="moonglow80@hotmail.com" />
                <input type="hidden" name="lc" value="CA" />
                <input type="hidden" name="item_name" value="Pay Rent" />
                <input type="hidden" name="button_subtype" value="services" />
                <input type="hidden" name="no_note" value="0" />
                <input type="hidden" name="currency_code" value="CAD" />
                <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest" />
                <table>
                  <tr>
                    <td>
                      <input type="hidden" name="on0" value="Rent" />Rent
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="os0">
                        <option value="Rent 1">Rent 1 $700.00 CAD</option>
                        <option value="Rent 2">Rent 2 $600.00 CAD</option>
                        <option value="Rent 3">Rent 3 $500.00 CAD</option>
                        <option value="Deposit">Deposit $350.00 CAD</option>
                      </select>
                    </td>
                  </tr>
                </table>
                <input type="hidden" name="option_select0" value="Rent 1" />
                <input type="hidden" name="option_amount0" value="700.00" />
                <input type="hidden" name="option_select1" value="Rent 2" />
                <input type="hidden" name="option_amount1" value="600.00" />
                <input type="hidden" name="option_select2" value="Rent 3" />
                <input type="hidden" name="option_amount2" value="500.00" />
                <input type="hidden" name="option_select3" value="Deposit" />
                <input type="hidden" name="option_amount3" value="350.00" />
                <input type="hidden" name="option_index" value="0" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
              </form>


            </Card.Description>

          </Card.Content>
        </Card>


      </div>
    );
  }
}

export default Contact;
