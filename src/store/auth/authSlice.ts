import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        status: 'not-authenticated',
        uid: '',
        email: '',
        img:'',
        google: false,
        token: ''
    },
    reducers: {
         onLogin: (state, {payload}) => {
            state.status = 'authenticated',
            state.uid = payload.user.uid,
            // state.email = payload.email
            // state.img = payload.img
            state.google = false,
            state.token = payload.token
         },
         onSignUp: (state, {payload}) => {
            state.status = 'authenticated',
            state.uid = payload.uid,
            // state.email = payload.email
            // state.img = payload.img
            state.google = false,
            state.token = ''
         },
         onGoogleSignIn:(state, {payload}) => {
            state.status = 'authenticated',
            // state.uid = payload.uid,
            // state.email = payload.email
            // state.img = payload.img
            state.google = true
            state.token = ''
         },
         onLogout:(state)=> {
            state.status = 'not-authenticated'
         }
    }

})

export const {onLogin, onSignUp, onGoogleSignIn, onLogout} = authSlice.actions
