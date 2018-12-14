import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import sagas from './sagas'
import reducers from './reducers'

const configureStore = () => {
  const middleware = []
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  const store = createStore(
    combineReducers(reducers),
    composeWithDevTools(applyMiddleware(...middleware)),
  )

  sagaMiddleware.run(sagas)

  return store
}

export default configureStore
