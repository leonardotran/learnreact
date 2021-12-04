import * as types from '../action/types';

// dinh nghia state mac dinh
const initDefaultState = {
    count: 0
}

// dinh nghia reducer 
const counterReducer = (state = initDefaultState, action) => {
    //kiem tra xem hanh dong nao se duoc goi vao store va day sang reducer xu ly
    switch(action.type) {
        case types.INCREMENT_NUMBER:
            // cap nhat xu ly state
            return {
                ...state,
                ...{count: action.payload.val + 1}
            }
        case types.DECREMENT_NUMBER:
            return {
                ...state,
                ...{count: action.payload.val -1}
            }
            default: 
                return state
    }
}

export default counterReducer;