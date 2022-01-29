import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './reducer';
import rootSaga from './saga';
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const configPersistRootReducer = {
    key: 'app_shopping_react',
    storage: storage,
    whitelist: ['cartReducer']
}

const rootReducerPersist = persistReducer(configPersistRootReducer, rootReducer)
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const configStore = () => {
    const store = createStore(
        rootReducerPersist,
        applyMiddleware(
            logger,
            sagaMiddleware
        )
    );
    const persistor = persistStore(store);
    sagaMiddleware.run(rootSaga);
    return {store, persistor}
}

export default configStore;