import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Footer extends Component {
    render(){
        return (
          <div  className="footer">
              <ul>
                  <li className="footerItem">© 2017, TeamSelector.com</li>
                  <li className="footerItem">Checkout the source on <Link className='gitHubLink' target="_blank" to="https://github.com/MrNem0">GitHub</Link></li>
                  <li className="footerItem">Розробник Пилипенко М.М.</li>
              </ul>
          </div>
        );
    }
}

export default Footer;