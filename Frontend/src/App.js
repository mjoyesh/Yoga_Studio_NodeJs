import React, {Component} from 'react';
import store from "./store";
import { Provider } from "react-redux";
import Route from './Routes';
import { renderRoutes } from "react-router-config"
import { BrowserRouter } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
               <BrowserRouter>
                    { renderRoutes(Route) }
               </BrowserRouter>
            </Provider>
        );
    }
}

export default App;