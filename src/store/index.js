import { applyMiddleware, createStore, Store } from 'redux';
import rootReducer, { RootState } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store: Store<RootState> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware( thunk))
);

export default store;
