import { configureStore } from '@reduxjs/toolkit'
import counterS from './userSlice'

const store = configureStore({
  reducer: {
    counter: counterS //counter is the name property in counterS
  },
})

export default store;
/*
import {useSelector} from 'react-redux';

const count = useSelector(state => state.counter.value) // do arrow function to get the state
// get that state property counter which is saved(name prop) and the property vale
*/

/*
import {usedispatch} from 'react-redux';

function component{const dispatch = useDispatch()
  onclick={()=> dispatch(incremnet())}
}



*/