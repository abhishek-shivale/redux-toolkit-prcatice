import {configureStore} from '@reduxjs/toolkit'
import loggedInSlice from  './reducer.js'
const store =  configureStore({
    reducer:{
        LoggedInReducer:loggedInSlice
    }
})

export default store