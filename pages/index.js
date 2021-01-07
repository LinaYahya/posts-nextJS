import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Post from "../components/Post";
import { fetchPosts } from "../store/actions";
import store from "../store/store";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  const [endLimit, setEndLimit] = useState(10);
  const [more, setMore] = useState(true);

  // set the value of endLimit when it updated using ref to use it outside return 
  const stateRef = useRef();
  stateRef.current = endLimit;


  const loadMoreHandler = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;

    if (stateRef.current === 100) {
      setMore(false);
    } else {
      setEndLimit((prevEnd) => prevEnd + 10);
    }
  };

  // to render more ten posts while user scroll down
  useEffect(() => {
    if (more) {
      window.addEventListener("scroll", loadMoreHandler);
    }
    return () => window.removeEventListener("scroll", loadMoreHandler);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Posts App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          {posts.slice(0, endLimit).map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </div>
        {!more && (<h3>no more data to load</h3>)}
      </main>
    </div>
  );
}

// get posts value by dispatching fetchPosts and use getServerSideProps to SSRendering the page 
export async function getServerSideProps() {
  await store.dispatch(fetchPosts());
  const { posts } = await store.getState();

  return { props: { posts: posts.posts } };
}
