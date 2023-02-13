import axios from 'axios'
import { onLogin, onSignUp, onVerification } from './authSlice'
import { showUsers } from '../chat';


export const userLogin = (payload: { email: string; password: string }) => {
   
    return async(dispatch: (arg0: { payload: any; type: "authSlice/onLogin" }) => void) => {
        const {data} = await axios.post('http://localhost:3031/api/auth/login', payload)
       
        dispatch(onLogin({
           user: data.user, 
            token: data.token
        }))
    }
}


export const newUser = (payload: { name: string; email: string; password: string }) => {

    return async(dispatch: (arg0: { payload: any; type: "authSlice/onSignUp" }) => void) => {
        const {data} = await axios.post('http://localhost:3031/api/users/newuser', payload)
        console.log('registrado',data.user)
        dispatch(onSignUp(data.user))
    }
}

export const validateJWT = () => {
    return async(dispatch)=> {
        const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:3031/api/auth", {
      headers: {
        "x-token": token,
      },
    });

    dispatch(onVerification(response.data.token));
    console.log("cambia el estado una vez");
    }
}

export const connectedUsers = ({uid}) => {
    return async(dispatch) => {
            const { data } = await axios.get(
              `http://localhost:3031/api/users/${uid}`
            );
            console.log("respuesta de la db", data);
            dispatch(showUsers(data));
       
        
    }
}