import { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { wrapper } from '../store/store';
import { fetchPosts } from '../store/actions';
import Post from '../components/Post';
import styles from '../styles/Home.module.css';

function HomeStatic({ posts }) {
  const [endLimit, setEndLimit] = useState(10);
  const [more, setMore] = useState(true);

  // set the value of endLimit when it updated using ref to use it outside return
  const stateRef = useRef();
  stateRef.current = endLimit;

  const loadMoreHandler = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop
      !== document.documentElement.offsetHeight
    ) return;

    if (stateRef.current === 100) {
      setMore(false);
    } else {
      setEndLimit((prevEnd) => prevEnd + 10);
    }
  };

  // to render more ten posts while user scroll down
  useEffect(() => {
    if (more) {
      window.addEventListener('scroll', loadMoreHandler);
    }
    return () => window.removeEventListener('scroll', loadMoreHandler);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Posts Static Page</title>
      </Head>
      <main className={styles.main}>
        {(posts.length) ? (
          <>
            <h2>Check latest posts</h2>
            <div className={styles.grid}>
              {posts.slice(0, endLimit).map((post) => (
                <Post post={post} key={post.id} />
              ))}
            </div>
          </>
        )
          : (
            <h4>
              Something went wrong while fetching data!!
              <br />
              try later
              {' '}
            </h4>
          )}
        {!more && (<h3>no more data to load</h3>)}
      </main>
    </div>
  );
}
export const getStaticProps = wrapper.getStaticProps(
  async ({ store }) => {
    await store.dispatch(fetchPosts());
  },
);

HomeStatic.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect((state) => state.posts.posts)(HomeStatic);
