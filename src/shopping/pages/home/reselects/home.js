import {createSelector} from 'reselect';

const stateHome = state => state.homeReducer;

export const getStateLoading = createSelector(
    stateHome,
    item => item.loading
);

export const getStateListProduct = createSelector(
    stateHome,
    item => item.listProducts
);
