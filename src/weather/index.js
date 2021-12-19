import React from "react";
import AppWeather from './pages/index';
import {Provider} from 'react-redux';
import configStore from "./store";

const {store} = configStore();

const App = () => {
    return (
        <Provider store={store}>
            <AppWeather/>
        </Provider>
    )
}

export default App;