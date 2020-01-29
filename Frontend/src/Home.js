import React, {Component} from 'react';
import Header from "./Components/Header";
import YogaGallery from "./Components/YogaGallery";
import Events from "./Components/Events";
import AboutUs from "./Components/About Us";
import Schedule from "./Components/Schedule";
import GetInTouch from "./Components/GetInTouch";
import Footer from "./Components/Footer";
import FeaturedClasses from "./Components/FeaturedClasses";

class Home extends Component {
    render() {
        return (
            <React.Fragment>
               <Header/>
               <FeaturedClasses />
               <Schedule />
               <AboutUs />
               <Events />
               <YogaGallery />
               <GetInTouch />
               <Footer />
            </React.Fragment>
        );
    }
}

export default Home;
