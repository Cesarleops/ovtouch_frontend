import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { onLoginPayloadInterface } from '../interfaces/authSlice.interface';

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
            const payloadT : onLoginPayloadInterface = payload
            state.name = payloadT.user.name
            state.status = 'authenticated',
            state.uid = payloadT.user.uid,
            localStorage.setItem('user', state.status)
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
