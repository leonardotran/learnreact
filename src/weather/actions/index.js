import * as types from './types';

// tao cac actions
const requestSearch = (city, lang ='vi') => ({
    type: types.SEARCH_REQUEST,
    payload: { city, lang }
});

// cac action ma xuat phat tu middleware saga

export const startWeather = (start = false) => ({
    type: types.START_SEARCH_WEATHER,
    payload: {start}
});

export const loadingGetDataWeather = (loading = false) => ({
    type: types.LOADING_GET_DATA,
    payload: {loading}
});

export const getDataWeatherSuccess = (data) => ({
    type: types.SEARCH_WEATHER_SUCCESS,
    payload: {data}
});

export const getDataWeatherFail = (error) => ({
    type: types.SEARCH_WEATHER_FAIL,
    payload: {error}
});

export const finishGetDataWeather = (finish = true) => ({
    type: types.FINISH_SEARCH_WEATHER,
    payload: {finish}
});
