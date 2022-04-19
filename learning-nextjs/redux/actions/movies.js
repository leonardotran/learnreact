export const SEARCH_MOVIES = Symbol('SEARCH_MOVIES');

export const START_SEARCH_MOVIES = Symbol('START_SEARCH_MOVIES');
export const SEARCH_MOVIES_SUCCESS = Symbol('SEARCH_MOVIES_SUCCESS');
export const SEARCH_MOVIES_FAIL = Symbol('SEARCH_MOVIES_FAIL');

export const searchMovieByKeyword = (keyword, page = 1) => ({
    type: SEARCH_MOVIES,
    keyword,
    page
});

export const startSearch = start => ({
    type: START_SEARCH_MOVIES,
    start
});


export const searchSuccess = movies => ({
    type: SEARCH_MOVIES_SUCCESS,
    movies
});


export const searchFail = err => ({
    type: SEARCH_MOVIES_FAIL,
    err
});
