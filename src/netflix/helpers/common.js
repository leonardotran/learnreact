import {KEY_LOGIN} from './constant';
import jwt from 'jsonwebtoken';


function isEmptyObject(obj) {
    for(let prop in obj) {
      if(Object.prototype.hasOwnProperty.call(obj, prop)) {
        return false;
        // Khong rong
      }
    }
  
    return JSON.stringify(obj) === JSON.stringify({});
    // tra ve true ===> object empty
  }

function saveTokenLocalStorage(token) {
  if(token !== null && token !== undefined && token !== '') {
    localStorage.setItem('tokenMovieLogin', token);
  }
}

function removeTokenLocalStorage() {
  localStorage.removeItem('tokenMovieLogin');
  //localStorage.clear();
}

function getTokenLocalStorage() {
  let token = localStorage.getItem('tokenMovieLogin');
  if(token !== null && token !== undefined && token !== '') {
    return token;
  }
  return null;
}

function decryptionTokenStorage() {
  let token = getTokenLocalStorage();
  let decode = {};
  if (token !== null){
    //giai ma 
    decode = jwt.verify(token, KEY_LOGIN);
  } 
  return decode; 

}

function getUserTokenStorage() {
  let infoUser = decryptionTokenStorage();
  if (infoUser.hasOwnProperty('username')) {
    return infoUser['username'];
  }
  return null;
}
function getIdUserTokenStorage() {
  let infoUser = decryptionTokenStorage();
  if (infoUser.hasOwnProperty('id')) {
    return infoUser['id'];
  }
  return null;
}

function checkUserIsLogined() {
  let username = getUserTokenStorage();
  let idUser = getIdUserTokenStorage();
  if (username !== null && idUser !== null){
    return true;
  }
  return false;
}



  export const helper = {
      isEmptyObject,
      saveTokenLocalStorage,
      removeTokenLocalStorage,
      decryptionTokenStorage,
      getUserTokenStorage,
      getIdUserTokenStorage,
      checkUserIsLogined
  }