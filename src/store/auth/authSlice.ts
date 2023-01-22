import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        status: 'not-authenticated',
        uid: '',
        email: '',
        img:'',
        google: false
    },
    reducers: {
         onLogin: (state, {payload}) => {
            state.status = 'authenticated',
            // state.uid = payload.uid,
            // state.email = payload.email
            // state.img = payload.img
            state.google = false
         },
         onSignUp: (state, {payload}) => {
            state.status = 'authenticated',
            // state.uid = payload.uid,
            // state.email = payload.email
            // state.img = payload.img
            state.google = false
         },
         onGoogleSignIn:(state, {payload}) => {
            state.status = 'authenticated',
            // state.uid = payload.uid,
            // state.email = payload.email
            // state.img = payload.img
            state.google = true
         },
         onLogout:(state)=> {
            state.status = 'not-authenticated'
         }
    }

})

export const {onLogin, onSignUp, onGoogleSignIn, onLogout} = authSlice.actions
