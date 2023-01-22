import axios from 'axios'
import { onLogin, onSignUp } from './authSlice'


export const userLogin = (payload) => {
    console.log('body', payload)
    return async(dispatch) => {
        const {data} = await axios.post('http://localhost:3031/api/auth/login', payload)
        console.log(data.user)
        console.log(data.token)
        dispatch(onLogin({
           user: data.user, 
            token: data.token
        }))
    }
}


export const newUser = (payload) => {

    return async(dispatch) => {
        const {data} = await axios.post('http://localhost:3031/api/users/newuser', payload)
        console.log('registrado',data.user)
        dispatch(onSignUp(data.user))
    }
}