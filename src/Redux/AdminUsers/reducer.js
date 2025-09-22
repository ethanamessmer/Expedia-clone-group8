import {
  USERS_REQUEST,
  USERS_FAILURE,
  GET_USERS_SUCCESS,
  POST_USER_SUCCESS,
  FETCH_USERS,
  DELETE_USER,
} from "./actionType";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const UsersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USERS_REQUEST:
      return { ...state, isLoading: true };
    case USERS_FAILURE:
      return { ...state, isError: true };
    case GET_USERS_SUCCESS:
      return { ...state, isLoading: false, users: payload };
    case POST_USER_SUCCESS:
      return { ...state, isLoading: false };
    case FETCH_USERS:
      return { ...state, isLoading: false, data: payload };
    case DELETE_USER:
      return { ...state, data: state.data.filter((u) => u.id !== payload) };
    default:
      return state;
  }
};
