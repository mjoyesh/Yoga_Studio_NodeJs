import React, {Component, Fragment} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";
import './Footer.scss';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-top wrapper">
                    <div className="footer-about">
                        <h2>About Us</h2>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.
                            It is a paradisematic country, in which roasted parts of sentences fly into gour mouth.
                        </p>
                    </div>
                    <div className="quick-links">
                        <h2>Quick Links</h2>
                        <ul>
                            <li>Home</li>
                            <li>Services</li>
                            <li>Events</li>
                            <li>Team</li>
                        </ul>
                    </div>
                    <div className="yogas">
                        <ul>
                            <li>Ashtanga Foundations</li>
                            <li>Surya Vinyasa</li>
                            <li>Chandra Vinyasa</li>
                            <li>Yinyasa</li>
                        </ul>
                    </div>
                    <div className="subscribe">
                        <h2 className="heading">Subscribe Newsletter</h2>
                        <p>A small river named Duden flows by their place and supplies it with the necessarg regelialia.</p>
                        <div className="email-input">
                            <input type="email" name="email" placeholder="Enter Email"/>
                            <button type="button">Send</button>
                        </div>
                        <h2 className="follow-us-head">Follow Us</h2>
                        <div className="social">
                            <a href="https://www.facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="https://www.twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="https://www.instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="https://www.linkedin.com" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </div>
                    </div>
                </div>
                <div className=" footer-bottom wrapper">
                    Copyright &copy;2019 All rights reserved | This template is made with <span className="heart">&hearts;</span> by <span className="colorlib">Colorlib</span>
                </div>
            </div>
        );
    }
}

export default Footer;