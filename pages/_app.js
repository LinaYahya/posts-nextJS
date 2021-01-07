import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import Head from 'next/head';
import store from '../store/store';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css" />
      </Head>

      <Component {...pageProps} />
    </Provider>
  )
}
const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
