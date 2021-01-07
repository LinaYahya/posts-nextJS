import Head from 'next/head';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/blog.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css" />
      </Head>
      <Navbar />
      {children}
    </>
  )
}