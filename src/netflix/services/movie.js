import axios from "axios";


// api search: https://api.themoviedb.org/3/search/movie?query=
//batman&api_key=cfe422613b250f702980a3bbf9e90716&page=1

const searchMovieByName = async (nameMovie, page = 1) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${nameMovie}&api_key=cfe422613b250f702980a3bbf9e90716&page=${page}`;
    const response = await axios.get(url);
    const result = await response.status === 200 ? await response.data : {};
    return result;

}
//api detail:
const getDetailMovieById = async(id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&&language=en-US&append_to_response=videos,images&include_image_language=en,null`;
    const response = await axios.get(url);
    const result = await response.status === 200 ? await response.data : {};
    return result;
}
export const apiMovie = {
    searchMovieByName,
    getDetailMovieById
}