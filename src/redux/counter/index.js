import React from 'react';
import {Provider} from 'react-redux';
import CounterApp from './pages/counter';
import store from './store';

const App = () => {
    return (
        <Provider store={store}>
            <CounterApp/>
        </Provider>
    )
}

export default App;