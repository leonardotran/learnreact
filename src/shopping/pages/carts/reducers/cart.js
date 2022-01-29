import * as types from './actions';

const initialState = {
    start: false,
    dataCart: [],
    errorCart: null,
    totalMoney: 0,  //tong tien trong gio hang
    totalItems: 0 // tong so luong san pham
}

export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.START_ADD_CART:
            return {
                ...state,
                ...{ start: action.start }
            }
        case types.ADD_CART_FAIL:
                return {
                    ...state,
                    ...{ errorCart: action.error }
                }   

        case types.ADD_CART_SUCCESS:
            const infoPd = action.data;
            const idPd = infoPd.id;
            // kiem tra xem san pham mua da ton tai trong gio hang chua.
            // neu ma chua ton tai thi them moi san pham vao gio hang.
            // neu da ton tai thi chi cap nhat so luong mua trong gio hang.
            const findPd = state.dataCart.find(item=> item.id === idPd);
            if(findPd) {
                infoPd.qty += 1;
                return {
                    ...state,
                    totalMoney: parseFloat(state.totalMoney) + parseFloat(infoPd.price),
                    errorCart: null
                }
            } else {
                infoPd.qty = 1;
                return {
                    dataCart: [...state.dataCart, infoPd],
                    errorCart: null,
                    totalMoney: parseFloat(state.totalMoney) + parseFloat(infoPd.price),
                    totalItems: state.totalItems+1
                
            }
        }
            // them so luong mua - mac dinh mua 1 san pham
        case types.REMOVE_ITEM_CART:
            const rowId = action.rowId;
            // lay duoc san pham can xoa trong gio hang theo rowId 
            // xoa bo thang day - cap nhat lai gio hang
            // cap nhat lai tong tien
            // cap nhat lai so luong san pham 
            const newDataCart = state.dataCart.filter(item => item.id !== rowId); // chua nhung items ko bi xoa
            const removeItem = state.dataCart.find(item => item.id === rowId); // bi xoa
            const moneyRemoved = parseFloat(removeItem.price)*parseFloat(removeItem.qty);
            const newTotalMoney = parseFloat(state.totalMoney) - moneyRemoved;
            return {
                ...state,
                ...{
                    dataCart: newDataCart,
                    totalMoney: newTotalMoney,
                    totalItems: state.totalItems-1
                }

            }
        default:
            return state;
    }
}