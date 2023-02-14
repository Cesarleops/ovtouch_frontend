import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'
import { postNewUser, postUserLogin } from '../interfaces/authSlice.interface';
import { onLogin, onSignUp, onVerification } from './authSlice'
import { useDispatch } from 'react-redux';
import { showUsers } from '../chat';


export const userLogin = (payload: postUserLogin) => {
return async (
    dispatch: (arg0: { payload: any; type: "authSlice/onLogin" }) => void
) => {
    const { data } = await axios.post(
    "http://localhost:3031/api/auth/login",
    payload
    );

    dispatch(
      onLogin({
        user: data.user,
        token: data.token,
      })
    );
  };
};



export const newUser = (payload: postNewUser) => {
  return async (
    dispatch: (arg0: { payload: any; type: "authSlice/onSignUp" }) => void
  ) => {
    const { data } = await axios.post(
      "http://localhost:3031/api/users/newuser",
      payload
    );
    console.log("registrado", data.user);
    dispatch(onSignUp(data.user));
  };
};

export const validateJWT = () => {
  return async(dispatch)=> {
    const token = localStorage.getItem("token");
  const response = await axios.get("http://localhost:3031/api/auth", {
    headers: {
      "x-token": token,
    },
  });

  dispatch(onVerification(response.data.token));
  }
  
};

export const connectedUsers =  (uid) => {
  return async(dispatch) => {
    const { data } = await axios.get(
      `http://localhost:3031/api/users/${uid}`
    );
  
    dispatch(showUsers(data));
  }
 
};