//action tu phia thao tac nguoi dung

const SEARCH_REQUEST = Symbol('SEARCH_REQUEST';)

// action cua middleware saga (khi ma no tiep nhan action tu phia thao tac nguoi dung)

const START_SEARCH_WEATHER = Symbol('START_SEARCH_WEATHER');
const LOADING_GET_DATA = Symbol('LOADING_GET_DATA'); //2 trang thai, dang load hoac load xong roi
const SEARCH_WEATHER_SUCCESS = Symbol('SEARCH_WEATHER_SUCCESS');
const SEARCH_WEATHER_FAIL = Symbol('SEARCH_WEATHER_FAIL');
const FINISH_SEARCH_WEATHER = Symbol('FINISH_SEARCH_WEATHER');
