import { combineReducers } from 'redux';

const initialPostsState = {
  posts: [],
  error: null,
  loading: false,
}

// create postsReducer function with action type FETCH_POSTS
const postsReducer = (state = initialPostsState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return {
        ...state,
        posts: action.payload,
        error: null,
        loading: false,
      }
    default:
      return state
  }
}
// combine reducer to return single reducer function
export default combineReducers({
  posts: postsReducer,
})