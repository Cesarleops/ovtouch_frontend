export interface postUserLogin {
  email: string;
  password: string;
} 

export interface postNewUser extends postUserLogin {
  name: string;
}

export interface userInterface{
  name:string,
  uid:string
}

export interface onLoginPayloadInterface {
  user:userInterface,
  token:string
}