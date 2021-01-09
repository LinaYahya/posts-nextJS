import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

const initialPostsState = {
  posts: [],
  post: null,
};

// create postsReducer function with action type FETCH_POSTS
const postsReducer = (state = initialPostsState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case 'FETCH_POSTS':
      return {
        ...state,
        posts: action.payload,
        error: null,
        loading: false,
      };
    case 'GET_POST_COMMENT':

      return {
        ...state,
        post: action.payload,
      };
    default:
      return state;
  }
};
// combine reducer to return single reducer function
export default combineReducers({
  posts: postsReducer,
});
