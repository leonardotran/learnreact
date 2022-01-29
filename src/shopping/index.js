import {Provider} from 'react-redux';
import RouteShopping from './routes/web';
import configStore from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import {Spin} from 'antd';
const {store, persistor} = configStore();

const AppShopping = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RouteShopping/>
            </PersistGate>
        </Provider>
    )
}

export default AppShopping;