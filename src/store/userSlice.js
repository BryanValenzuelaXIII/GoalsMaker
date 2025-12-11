import { createSlice } from '@reduxjs/toolkit'


 const userInfoSlice = createSlice({
    name: 'user', //any state name, can be anything
    initialState:{
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        onUserFetch: (state, action) => { //increment is the key name for the dispatch to use
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        onUserFail: (state, action) => { //another reducer
            state.data = null;
            state.loading = false;
            state.error = action.payload;
        },
        onUserLoading: (state) =>{
            state.loading = true;
        },
        onUserLoggingOut: (state) => {
            state.data = null;
            state.loading = false;
            state.error = null;
        }
    }
})

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
export const { onUserFetch, onUserFail, onUserLoading, onUserLoggingOut } = userInfoSlice.actions;
export const userInfoReducer = userInfoSlice.reducer;

export const {increament, decrement} = counterS.actions //why actions
export const counterReducer = counterS.reducer; //it wants me to autocomplete reducer