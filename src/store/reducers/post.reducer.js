import {
  FETCH_POSTS_FAIL,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_START
} from "../actions/types";

const initState = {
  isLoading: false,
  posts: [{ id: "@#@", title: "Hello", content: "SAMple post content" }],
  error: null
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_POSTS_START: {
      return {
        ...state,
        isLoading: true
      };
    }

    case FETCH_POSTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        posts: [...action.payload]
      };
    }

    case FETCH_POSTS_FAIL: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    }

    default:
      return state;
  }
};

export default postReducer;
