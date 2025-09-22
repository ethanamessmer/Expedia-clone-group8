import {
  PACKAGES_REQUEST,
  PACKAGES_FAILURE,
  GET_PACKAGES_SUCCESS,
  POST_PACKAGE_SUCCESS,
  FETCH_PACKAGES,
  DELETE_PACKAGE,
} from "./actionType";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const PackagesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PACKAGES_REQUEST:
      return { ...state, isLoading: true };
    case PACKAGES_FAILURE:
      return { ...state, isError: true };
    case GET_PACKAGES_SUCCESS:
      return { ...state, isLoading: false, packages: payload };
    case POST_PACKAGE_SUCCESS:
      return { ...state, isLoading: false };
    case FETCH_PACKAGES:
      return { ...state, isLoading: false, data: payload };
    case DELETE_PACKAGE:
      return { ...state, data: state.data.filter((u) => u.id !== payload) };
    default:
      return state;
  }
};
