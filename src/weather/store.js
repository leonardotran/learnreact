import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './reducers/index';
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

const configStore = () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(
            logger,
            sagaMiddleware
        )
    );
    sagaMiddleware.run(rootSaga);
    return {store}
}

export default configStore;