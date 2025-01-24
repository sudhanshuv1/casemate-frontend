import {DELETE_POST_USER_SUCCESS, DELETE_POST_USER_FAIL,DELETE_APPOINMENT_USER_FAIL, DELETE_APPOINMENT_USER_SUCCESS, DELETE_USER_FAIL, DELETE_USER_SUCCESS, GET_ALL_USER_FAIL, GET_ALL_USER_LOADING, GET_ALL_USER_SUCCESS, GET_USER_FAIL, GET_USER_SUCCESS } from "../const/admin";
import { setAlert } from "./alert";
import API from '../../Api/API';


export const getAllUser = (role,name) => async (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch({type : GET_ALL_USER_LOADING})
  try {
    const response = await API.get(`admin/?role=${role}&name=${name}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: GET_ALL_USER_SUCCESS, payload: response.data });
  } catch (error) {
    const { errors, msg } = error.response.data;
    console.log(errors);
    console.log(error);
    if (Array.isArray(errors)) {
      errors.map((err) => dispatch(setAlert(err.msg, "danger")));
    }
    if (msg) {
      dispatch(setAlert(msg, "danger"));
    }
    dispatch({ type: GET_ALL_USER_FAIL, payload: error });
  }
};

export const deleteUser = (id,role,name) => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const response = await API.delete(
      `admin/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: DELETE_USER_SUCCESS, payload: response.data });
    dispatch(setAlert(response.data.msg, "success"));
    dispatch(getAllUser(role,name));
  } catch (error) {
    const { errors, msg } = error.response.data;
    console.log(errors);
    console.log(error);
    if (Array.isArray(errors)) {
      errors.map((err) => dispatch(setAlert(err.msg, "danger")));
    }
    if (msg) {
      dispatch(setAlert(msg, "danger"));
    }
    dispatch({ type: DELETE_USER_FAIL, payload: error });
  }
};
export const deleteAppointmentByAdmin = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const response = await API.delete(
      `admin/app/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: DELETE_APPOINMENT_USER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: DELETE_APPOINMENT_USER_FAIL, payload: error });
    console.log(error);
  }
};

export const deletePostByAdmin = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const response = await API.delete(
      `admin/post/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: DELETE_POST_USER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: DELETE_POST_USER_FAIL, payload: error });
    console.log(error);
  }
};

export const getUser = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const response = await API.get(
      `admin/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: GET_USER_SUCCESS, payload: response.data });
  } catch (error) {
    const { errors, msg } = error.response.data;
    console.log(errors);
    console.log(error);
    if (Array.isArray(errors)) {
      errors.map((err) => dispatch(setAlert(err.msg, "danger")));
    }
    if (msg) {
      dispatch(setAlert(msg, "danger"));
    }
    dispatch({ type: GET_USER_FAIL, payload: error });
  }
};
