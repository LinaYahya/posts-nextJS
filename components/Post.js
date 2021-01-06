import React from "react";
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Post({ post }) {
  return (
    <article className={styles.card}>
      <Link href={`/${post.id}`}>
        <a>{post.title}</a>
      </Link>
      <p>{post.body.slice(0, 50)}...</p>
      <Link href={`/${post.id}`} style={{display: 'inline'}}>
        <a>read more</a>
      </Link>
    </article>
  );
}
