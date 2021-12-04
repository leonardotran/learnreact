import * as types from './types';

// noi day dinh nghia cac action 
export const incrementNumber = (val) => ({
    type: types.INCREMENT_NUMBER, //dinh nghia ten hanh dong
    payload: { val } // du lieu gui len
})

export const decrementNumber = (val) => ({
    type: types.DECREMENT_NUMBER, //dinh nghia ten hanh dong
    payload: { val } // du lieu gui len
})