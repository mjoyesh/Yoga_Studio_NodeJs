import React, {Component, Fragment} from 'react';
import Header from "./Components/Header";
import YogaGallery from "./Components/YogaGallery";
import Events from "./Components/Events";
import AboutUs from "./Components/About Us";
import Schedule from "./Components/Schedule";
import GetInTouch from "./Components/GetInTouch";
import Footer from "./Components/Footer";
import FeaturedClasses from "./Components/FeaturedClasses";
import store from "./store";
import { Provider } from "react-redux";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
               <Header/>
               <FeaturedClasses />
               <Schedule />
               <AboutUs />
               <Events />
               <YogaGallery />
               <GetInTouch />
               <Footer />
            </Provider>
        );
    }
}

export default App;
