import { createSelector } from "reselect";

const detailState = state => state.detailReducer

export const getLoadingStateDetail = createSelector(
    detailState,
    item => item.loading
);

export const getDataDetailState = createSelector(
    detailState,
    item => item.details
);

export const getErrorDetailState = createSelector(
    detailState,
    item => item.error
)