import axios from 'axios'
import { onLogin, onSignUp } from './authSlice'


export const userLogin = (payload) => {
    console.log('body', payload)
    return async(dispatch) => {
        axios.post('http://localhost:3031/api/auth/login', payload)
        dispatch(onLogin(payload))
    }
}


export const newUser = (payload) => {
    console.log('body', payload)

    return async(dispatch) => {
        axios.post('http://localhost:3031/api/users/newuser', payload)
        console.log('created user')
        dispatch(onSignUp(payload))
    }
}