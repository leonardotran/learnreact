import {Provider} from 'react-redux';
import RouteShopping from './routes/web';
import configStore from './redux/store';

const {store} = configStore();

const AppShopping = () => {
    return (
        <Provider store={store}>
            <RouteShopping/>
        </Provider>
    )
}

export default AppShopping;