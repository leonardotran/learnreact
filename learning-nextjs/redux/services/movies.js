import axios from 'axios';

const searchMovies = async (key, page = 1) => {
    const api = `https://api.themoviedb.org/3/search/movie?query=${key}&api_key=cfe422613b250f702980a3bbf9e90716&page=${page}`;
    const response = await axios.get(api);
    const result = await response.status === 200 ? await response.data : {};
    return result;
}

export const api = {
    searchMovies
}
//

