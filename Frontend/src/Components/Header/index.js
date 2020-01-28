import React, {Component} from 'react';
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import './Header.scss';
import Banner from "./Banner";

class Header extends Component {
    constructor(props) {
        super(props);
        this.videoBg = React.createRef();
        this.state = {
            play: true
        }
    }

    playVideo = () => {
        if(this.videoBg.current.paused) {
            this.videoBg.current.play();
            this.setState({
                play: true
            })
        }
        else {
            this.videoBg.current.pause();
            this.setState({
                play: false
            })
        }
    }

    render() {
        const { play } = this.state;
        return (
            <div className="header">
                <video autoPlay muted loop className="header-bg" ref={this.videoBg}>
                    <source src="./assets/yoga.mp4" type="video/mp4" />
                </video>
                <HeaderTop />
                <HeaderBottom />
                <Banner playVideo={this.playVideo} play={play}/>
            </div>
        );
    }
}

export default Header;
