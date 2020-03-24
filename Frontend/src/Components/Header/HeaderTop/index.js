import React, {Component} from 'react';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class HeaderTop extends Component {
    render() {
        return (
            <div className="header-top">
                <div className="wrapper header-space">
                    <div className="contact">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p className="email">mjoyesh@gmail.com</p>
                        <FontAwesomeIcon icon={faPhoneAlt} />
                        <p>+123445678910</p>
                    </div>
                    <div className="social">
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderTop;