/* eslint-disable no-unused-vars */

const setTokenToLocal = (token) => {
    const preToken = localStorage.getItem("token");
    if (!preToken) {
      return localStorage.setItem("token", token);
    }
    localStorage.removeItem("token");
    localStorage.setItem("token", token);
  };
  
  export default setTokenToLocal;
  