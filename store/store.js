import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';

import reducers from './reducers';

// this to create app store and applyMiddleware to thunk
const store = createStore(reducers, applyMiddleware(thunk));
const makeStore = () => store;
const wrapper = createWrapper(makeStore, { debug: true });

export { wrapper, store };
