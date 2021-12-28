import { createSelector } from 'reselect'

// State weather
const weather = state => state.weatherStore; //Call back

export const getDataMainWeather = createSelector(
    weather,
    item => {
        // item chinh du lieu nam ben trong state weather
        if(item.hasOwnProperty('weathers')) {
            return item['weathers']
        }
        return {}
    }
);

export const getStatusLoadingData = createSelector(
    weather,
    item => item.loading
);

export const getStatusFinishData = createSelector(
    weather,
    item => item.finish
);