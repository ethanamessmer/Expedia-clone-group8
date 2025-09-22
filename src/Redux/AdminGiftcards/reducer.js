import {
  GIFTCARDS_REQUEST,
  GIFTCARDS_FAILURE,
  GET_GIFTCARDS_SUCCESS,
  POST_GIFTCARD_SUCCESS,
  FETCH_GIFTCARDS,
  DELETE_GIFTCARD,
} from "./actionType";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const GiftcardsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GIFTCARDS_REQUEST:
      return { ...state, isLoading: true };
    case GIFTCARDS_FAILURE:
      return { ...state, isError: true };
    case GET_GIFTCARDS_SUCCESS:
      return { ...state, isLoading: false, giftcards: payload };
    case POST_GIFTCARD_SUCCESS:
      return { ...state, isLoading: false };
    case FETCH_GIFTCARDS:
      return { ...state, isLoading: false, data: payload };
    case DELETE_GIFTCARD:
      return { ...state, data: state.data.filter((u) => u.id !== payload) };
    default:
      return state;
  }
};
