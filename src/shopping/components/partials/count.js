import {createSelector} from 'reselect';

const cartSelector = state => state.cartReducer;

export const getItemsCart = createSelector(
    cartSelector,
    item => item.totalItems
);
