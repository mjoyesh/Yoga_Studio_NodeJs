import React, {Component} from 'react';
import './AboutUs.scss';

class AboutUs extends Component {
    render() {
        return (
            <div className="about-us wrapper">
                <div className="about-us-details">
                    <span className="border"></span>
                    <h1>ABOUT US</h1>
                    <div className="about-us-content">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type specimen book.
                        <br/>
                        <br/>
                        It has survived not
                        only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </div>
                </div>
                <div className="yoga-images">
                    <img src="./assets/doyoga_about_3.jpg" alt="Do Yoga" className="do-yoga1"/>
                    <img src="./assets/doyoga_about_4.jpg" alt="Do Yoga" className="do-yoga2"/>
                </div>
            </div>
        );
    }
}

export default AboutUs;