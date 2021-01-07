import Head from 'next/head';
import Post from '../components/Post';
import { fetchPosts } from '../store/actions';
import store from '../store/store';
import styles from '../styles/Home.module.css'

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Posts Static Page</title>
        <link rel="icon" href="/blog.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          {posts.slice(0, 20).map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  await store.dispatch(fetchPosts());
  const { posts } = await store.getState();

  return { props: { posts: posts.posts } }
}