// import axios from "axios";
import jwt  from "jsonwebtoken";
import { KEY_LOGIN } from "../helpers/constant";


const checkLoginUser = async (user, pass) => { 
    // dong vai tro nhu la ben phia backend 
    // fake tao 1 api

    let token = null;
    if (user === 'admin' && pass === '123456') {
        // ma hoa thong tin cua user va tra ve token
        token = jwt.sign(
            { 
                id: 1,
                username: 'admin',
                email: 'admin@example.com',
                phone: '123456789',
                address: 'Ha Noi'
    
            }, KEY_LOGIN);

    }
    return token;
}
export const apiLogin = {
    checkLoginUser
}