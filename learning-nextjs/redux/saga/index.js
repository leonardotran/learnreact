import { all, call} from 'redux-saga/effects';
import { watchMovieSage } from './movies';

export default function* rootSaga(){
    yield all([
        call(watchMovieSage)
    ])
}