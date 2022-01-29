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


export const helpers = {
    isEmptyObject
}