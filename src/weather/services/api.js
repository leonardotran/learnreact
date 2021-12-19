import axios from 'axios';

const getDataWeatherCity = async (name, lang = 'vi') => {
    const urlApi =`https://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=84f0c05e16abc57b03ca8fa00b59f78e&units=metric&${lang}`;

    const response = await axios.get(urlApi);
    const result = await response.status === 200 ? await response.data : {};
    return result;
} 
export const apiWeather = {
    getDataWeatherCity
}