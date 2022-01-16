import {dataProducts} from './data';

const getAllDataProducts = () => {
    return dataProducts;
}

const getAllDataProductsById = (id) => {
    const data = dataProducts.find(item=> item.id === id);
    return data;
}

export const apiShopping = {
    getAllDataProducts,
    getAllDataProducts
}