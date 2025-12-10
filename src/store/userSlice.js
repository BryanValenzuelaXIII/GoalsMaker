import { createSlice } from '@reduxjs/toolkit'

 const counterS = createSlice({
    name: 'counter', //any state name, can be anything
    initialState:{
        value: 0
    },
    reducers: {
        increament: state => { //increment is the key name for the dispatch to use

            state.value += 1
        },
        decrement: state => { //another reducer

            state.value -= 1
        }
    }
})
//how to identify each
// export const counterB = createSlice({
//     name: 'counterB', //any state name, can be anything
//     intialState: {
//         value: 0
//     },
//     reducers: {
//         increament: state => { //increment is the key name for the dispatch to use

//             state.value += 1
//         },
//         decrement: state => { //another reducer

//             state.value -= 1
//         }
//     }
// })
export const {increament, decrement} = counterS.actions //why actions
export default counterS.reducer //it wants me to autocomplete reducer