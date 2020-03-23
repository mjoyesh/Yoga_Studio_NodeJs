import React, {Component, Fragment} from 'react';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

class HeaderBottom extends Component {
    state = {
        menu: false
    }

    mobileMenu = () => {
        const {menu} = this.state;
        this.setState({
            menu: !menu
        })
    }

    render() {
        const { menu } = this.state;
        return (
            <div className="header-bottom wrapper">
                <div className="logo" >
                    DOYOGA
                </div>
                <div className="menu">
                    {window.innerWidth >= 768 ?
                        <ul className="header-menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/yoga-table">Classes</Link></li>
                            <li>Pages</li>
                            <li>About</li>
                            <li>Events</li>
                            <li>Gallery</li>
                            <li>Contact</li>
                        </ul>
                        :
                        <Fragment>
                            <FontAwesomeIcon icon={faBars} onClick={this.mobileMenu}/>
                            {
                                menu ?
                                    <ul className="header-mobile">
                                        <li>Home</li>
                                        <li>Classes</li>
                                        <li>Pages</li>
                                        <li>About</li>
                                        <li>Events</li>
                                        <li>Gallery</li>
                                        <li>Contact</li>
                                    </ul>
                                    :
                                    null
                            }
                        </Fragment>
                    }
                </div>
            </div>
        );
    }
}

export default HeaderBottom;