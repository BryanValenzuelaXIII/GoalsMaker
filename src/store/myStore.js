import { configureStore } from '@reduxjs/toolkit'
import { userInfoReducer, counterReducer } from './userSlice'
import createSagaMiddleware from 'redux-saga'
import mySaga from '../Sagas/goalsSagas'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    counter: counterReducer, //counter is the name property in counterS
    user: userInfoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(mySaga)

export default store;