import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

// this to create app store and applyMiddleware to thunk
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
