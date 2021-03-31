import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import appReducer from './app/reducers'

const rootReducer = combineReducers({
  app: appReducer
})

const initializeStore = (initialState) => createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(ReduxThunk))
)

export default initializeStore