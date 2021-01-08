import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from '../styles/Home.module.css';

export default function Post({ post }) {
  const { id, title, body } = post;

  return (
    <article className={styles.card}>
      <Link href={`/${id}`}>
        <a>{title}</a>
      </Link>
      <p>
        {body.slice(0, 50)}
        ...
      </p>
      <Link href={`/${id}`} style={{ display: 'inline' }}>
        <a>read more</a>
      </Link>
    </article>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
