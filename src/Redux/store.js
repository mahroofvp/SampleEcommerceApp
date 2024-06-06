import {configureStore} from '@reduxjs/toolkit'
import logFormSlice from './logFormSlice'


const store = configureStore({
    reducer:{
       form:logFormSlice 
    }
})


export default store