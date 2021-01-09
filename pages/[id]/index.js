import PropTypes from 'prop-types';
import { getPostComment } from '../../store/actions';
import Comment from '../../components/Comment';
import { store } from '../../store/store';
import styles from '../../styles/Post.module.css';

const PostPage = ({ post }) => {
  const { title, body, comments } = post;
  return (
    <div className={styles.post_container}>
      <div className={styles.post_details}>
        <h3>{title}</h3>
        <p style={{ fontWeight: 'bold' }}>{body}</p>
        <ul className={styles.comments_list}>
          <h3>Check post comments</h3>
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export async function getServerSideProps({ query: { id } }) {
  await store.dispatch(getPostComment(id));
  const { posts } = await store.getState();
  return { props: { post: posts.post } };
}

PostPage.propTypes = {
  post: PropTypes.shape({
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostPage;
