// create async action to fetchPosts by return async function
export const fetchPosts = () => async dispatch => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const response = await res.json();
  dispatch({ type: 'FETCH_POSTS', payload: response });
};

// create async action to get comments on specific post by postID
export const getPostComment = (id) =>  async dispatch => {
  const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const commentsRes = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  const post = await postRes.json();
  const comments = await commentsRes.json();
  post.comments = comments;
  dispatch({ type: 'GET_POST_COMMENT', payload: post})
}