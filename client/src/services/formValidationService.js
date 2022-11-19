export const checkEmptyFields = (obj) => {
    for (const property in obj) {
      if(obj[property] === undefined || obj[property] === null || obj[property] === ''){
        return false;
      }
    }
    return true;
  }