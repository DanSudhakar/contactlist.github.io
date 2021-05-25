import axios from "axios";
import * as aType from "./actionTypes";

export const buyLaptop = () => {
  return {
    type: aType.BUY_LAPTOP,
  };
};

export const buyMobile = () => {
  return {
    type: aType.BUY_MOBILE,
  };
};

export const fetchUsersRequest = () => {
  return {
    type: aType.FETCH_USERS_REQUEST,
  };
};
export const fetchUsersSuccess = (users) => {
  return {
    type: aType.FETCH_USERS_SUCCESS,
    data: users,
  };
};
export const fetchUsersFail = (error) => {
  return {
    type: aType.FETCH_USERS_FAIL,
    data: error,
  };
};
export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        let users = response.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFail(error));
      });
  };
};
