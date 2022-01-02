const encodeBasic = (username, password) => {
  return btoa(`${username}:${password}`).toString();
};
export default encodeBasic;
