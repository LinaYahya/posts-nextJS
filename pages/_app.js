/* eslint-disable react/jsx-props-no-spreading */
import Router from 'next/router';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import NProgress from 'nprogress'; // nprogress module
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import store from '../store/store';
import 'nprogress/nprogress.css'; // styles of nprogress
import '../styles/globals.css';

// Binding events to display spinner when user navigate between routes
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default wrapper.withRedux(MyApp);
