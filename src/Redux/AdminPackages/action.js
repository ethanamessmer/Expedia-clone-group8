import axios from "axios";
import {
  PACKAGES_REQUEST,
  PACKAGES_FAILURE,
  GET_PACKAGES_SUCCESS,
  POST_PACKAGE_SUCCESS,
  FETCH_PACKAGES,
  DELETE_PACKAGE,
} from "./actionType";

export const packagesRequest = () => ({ type: PACKAGES_REQUEST });
export const packagesFailure = () => ({ type: PACKAGES_FAILURE });

export const getPackagesSuccess = (payload) => ({ type: GET_PACKAGES_SUCCESS, payload });
export const postPackageSuccess = () => ({ type: POST_PACKAGE_SUCCESS });
export const fetchPackagesAction = (payload) => ({ type: FETCH_PACKAGES, payload });
export const deletePackageAction = (payload) => ({ type: DELETE_PACKAGE, payload });

export const addPackage = (payload) => (dispatch) => {
  dispatch(packagesRequest());
  axios
    .post("http://localhost:8080/Things_todo", payload)
    .then((res) => {
      dispatch(postPackageSuccess());
    })
    .catch((err) => {
      console.error(err);
      dispatch(packagesFailure());
    });
};

export const fetchPackages = () => (dispatch) => {
  dispatch(packagesRequest());
  axios
    .get("http://localhost:8080/Things_todo")
    .then((res) => {
      dispatch(fetchPackagesAction(res.data));
    })
    .catch((err) => {
      console.error(err);
      dispatch(packagesFailure());
    });
};

export const deletePackage = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:8080/Things_todo/${encodeURIComponent(id)}`)
    .then(() => {
      dispatch(deletePackageAction(id));
    })
    .catch((err) => {
      console.error(err);
    });
};
