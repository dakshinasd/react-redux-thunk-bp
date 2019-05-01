import {
  FETCH_POSTS_FAIL,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_START
} from "./types";

export const fetchPostSuccess = data => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: data
  };
};

export const fetchPostStart = () => {
  return {
    type: FETCH_POSTS_START
  };
};

export const fetchPostError = error => {
  return {
    type: FETCH_POSTS_FAIL,
    payload: error
  };
};

export const fetchPosts = () => {
  return dispatch => {
    dispatch(fetchPostStart());

    fetch("https://jsonplaceholder.typicode.com/posts?limit_2")
      .then(res => res.json())
      .then(parsed => dispatch(fetchPostSuccess(parsed)))
      .catch(err => dispatch(fetchPostError(err.message)));
  };
};
