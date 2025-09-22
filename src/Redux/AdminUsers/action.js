import axios from "axios";
import {
  USERS_REQUEST,
  USERS_FAILURE,
  GET_USERS_SUCCESS,
  POST_USER_SUCCESS,
  FETCH_USERS,
  DELETE_USER,
} from "./actionType";

export const usersRequest = () => ({ type: USERS_REQUEST });
export const usersFailure = () => ({ type: USERS_FAILURE });

export const getUsersSuccess = (payload) => ({ type: GET_USERS_SUCCESS, payload });
export const postUserSuccess = () => ({ type: POST_USER_SUCCESS });
export const fetchUsersAction = (payload) => ({ type: FETCH_USERS, payload });
export const deleteUserAction = (payload) => ({ type: DELETE_USER, payload });

export const addUser = (payload) => (dispatch) => {
  dispatch(usersRequest());
  axios
    .post("http://localhost:8080/users", payload)
    .then((res) => {
      dispatch(postUserSuccess());
      // optional: dispatch(fetchUsers()) or return created user
    })
    .catch((err) => {
      console.error(err);
      dispatch(usersFailure());
    });
};

export const fetchUsers = () => (dispatch) => {
  dispatch(usersRequest());
  axios
    .get("http://localhost:8080/users")
    .then((res) => {
      dispatch(fetchUsersAction(res.data));
    })
    .catch((err) => {
      console.error(err);
      dispatch(usersFailure());
    });
};

export const deleteUser = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:8080/users/${encodeURIComponent(id)}`)
    .then(() => {
      dispatch(deleteUserAction(id));
    })
    .catch((err) => {
      console.error(err);
    });
};
