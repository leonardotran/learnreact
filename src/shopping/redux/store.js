import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './reducer';
import rootSaga from './saga';

// create the saga middleware
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
    return {store: store}
}

export default configStore;