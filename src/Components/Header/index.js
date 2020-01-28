import React, {Component} from 'react';
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import './Header.scss';
import Video from "../../../assets/yoga.mp4";

class Header extends Component {
    render() {
        return (
            <div>
                <video autoPlay muted loop id="myVideo" className="header-bg">
                    <source src={Video} type="video/mp4" />
                </video>
                <HeaderTop />
                <HeaderBottom />
            </div>
        );
    }
}

export default Header;