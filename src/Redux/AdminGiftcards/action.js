import axios from "axios";
import {
  GIFTCARDS_REQUEST,
  GIFTCARDS_FAILURE,
  GET_GIFTCARDS_SUCCESS,
  POST_GIFTCARD_SUCCESS,
  FETCH_GIFTCARDS,
  DELETE_GIFTCARD,
} from "./actionType";

export const giftcardsRequest = () => ({ type: GIFTCARDS_REQUEST });
export const giftcardsFailure = () => ({ type: GIFTCARDS_FAILURE });

export const getGiftcardsSuccess = (payload) => ({ type: GET_GIFTCARDS_SUCCESS, payload });
export const postGiftcardSuccess = () => ({ type: POST_GIFTCARD_SUCCESS });
export const fetchGiftcardsAction = (payload) => ({ type: FETCH_GIFTCARDS, payload });
export const deleteGiftcardAction = (payload) => ({ type: DELETE_GIFTCARD, payload });

export const addGiftcard = (payload) => (dispatch) => {
  dispatch(giftcardsRequest());
  axios
    .post("http://localhost:8080/giftcards", payload)
    .then((res) => {
      dispatch(postGiftcardSuccess());
    })
    .catch((err) => {
      console.error(err);
      dispatch(giftcardsFailure());
    });
};

export const fetchGiftcards = () => (dispatch) => {
  dispatch(giftcardsRequest());
  axios
    .get("http://localhost:8080/giftcards")
    .then((res) => {
      dispatch(fetchGiftcardsAction(res.data));
    })
    .catch((err) => {
      console.error(err);
      dispatch(giftcardsFailure());
    });
};

export const deleteGiftcard = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:8080/giftcards/${encodeURIComponent(id)}`)
    .then(() => {
      dispatch(deleteGiftcardAction(id));
    })
    .catch((err) => {
      console.error(err);
    });
};
