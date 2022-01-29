import { createSelector } from 'reselect'

const cartSelector = state => state.cartReducer;

export const getErrorMessage = createSelector(
    cartSelector,
    err => err.errorCart
);

export const getDataCart = createSelector(
    cartSelector,
    data => data.dataCart
);

export const getTotalMoney = createSelector(
    cartSelector,
    money => money.totalMoney
);

