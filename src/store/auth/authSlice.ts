import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        name: '',
        status: 'not-authenticated',
        uid: '',
        email: '',
        img:'',
        google: false,
        token: ''
    },
    reducers: {
         onLogin: (state, {payload}) => {
            state.name = payload.user.name
            state.status = 'authenticated',
            state.uid = payload.user.uid,
            // state.email = payload.email
            // state.img = payload.img
            state.google = false,
            state.token = payload.token
         },
         onSignUp: (state, {payload}) => {
            state.name = payload.name
            state.status = 'authenticated',
            state.uid = payload.uid,
            // state.email = payload.email
            // state.img = payload.img
            state.google = false,
            state.token = ''
         },
         onGoogleSignIn:(state, {payload}) => {
            state.name = payload.name
            state.status = 'authenticated',
            // state.uid = payload.uid,
            // state.email = payload.email
            // state.img = payload.img
            state.google = true
            state.token = ''
         },
         onVerification: (state, {payload}) => {
            state.token= payload
            state.status = 'authenticated'
         },

         onLogout:(state)=> {
            state.status = 'not-authenticated'
         },
         checkingCredentials: (state) => {
            state.status = 'checking'
         }

    }

})

export const {onLogin, onSignUp, onGoogleSignIn, onLogout, onVerification, checkingCredentials} = authSlice.actions
