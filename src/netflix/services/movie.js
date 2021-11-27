import axios from "axios";
import { Jwt } from "jsonwebtoken";

// api search: https://api.themoviedb.org/3/search/movie?query=
//batman&api_key=cfe422613b250f702980a3bbf9e90716&page=1

const searchMovieByName = async (nameMovie, page = 1) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${nameMovie}&api_key=cfe422613b250f702980a3bbf9e90716&page=${page}`;
    const response = await axios.get(url);
    const result = await response.status === 200 ? await response.data : {};
    return result;

}
//api detail:
const getDetailMovieById = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&&language=en-US&append_to_response=videos,images&include_image_language=en,null`;
    const response = await axios.get(url);
    const result = await response.status === 200 ? await response.data : {};
    return result;
}
const getUpcomingMovies = async (fdate, tdate, page = 1) => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&release_date.gte=${fdate}&release_date.lte=${tdate}&with_release_type=3|2`
    const response = await axios.get(url);
    const result = await response.status === 200 ? await response.data : {};
    return result;
}

const loginUser = async (user, pass) => {
    const url =`https://reqres.in/api/login`;
    const params = new URLSearchParams();
    params.append('email',user);
    params.append('password',pass);
    const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    const response = await axios.post(url, params, config);
    const result   = await response.status === 200 ? await response.data : {};
    return result;
}

export const apiMovie = {
    searchMovieByName,
    getDetailMovieById,
    getUpcomingMovies,
    loginUser
}