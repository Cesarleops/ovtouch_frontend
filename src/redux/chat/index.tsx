import { createSlice } from "@reduxjs/toolkit";

interface chatInitialStateInterface {
  users: {}
  isChatting: boolean
  currentChat:{} 
}

export const chatSlice = createSlice({
  name: "chatSlice",
  initialState: {
    users: [],
    isChatting: false,
    currentChat: {},
  },
  reducers: {
    startChat: (state, { payload }) => {
      state.isChatting = true;
      state.currentChat = payload;
    },
    showUsers: (state, { payload }) => {
      state.users = payload;
    },
  },
});

export const { startChat, showUsers } = chatSlice.actions;
