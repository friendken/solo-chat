import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/rootReducer';
import rootSaga from '../sagas';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    const composeEnhancers = composeWithDevTools({
      // Specify name here, actionsBlacklist, actionsCreators
    });
    return composeEnhancers(applyMiddleware(...middleware, logger));
  }
  return applyMiddleware(...middleware);
};

const configureStore = () => {
  const store = createStore(
    rootReducer,
    bindMiddleware([sagaMiddleware])
  );

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  };

  store.runSagaTask();
  return store;
};

export default configureStore;
