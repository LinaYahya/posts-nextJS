import { combineReducers } from 'redux';

const initialPostsState = {
  posts: [],
  error: null,
  loading: false,
  post: null,
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
      };
    case 'GET_POST_COMMENT':
      let post = state.posts.find(({id}) => id === Number(action.payload));
      return {
        ...state,
        post: {...post, comments: action.comments}
      }
    default:
      return state
  }
}
// combine reducer to return single reducer function
export default combineReducers({
  posts: postsReducer,
})