// create async action to fetchPosts by return async function
export const fetchPosts = () => async dispatch => {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  const response = await res.json();

  dispatch({ type: "FETCH_POSTS", payload: response });
};
