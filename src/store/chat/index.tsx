import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "chatSlice",
  initialState: {
    isChatting: false,
    currentChat: undefined,
  },
  reducers: {
    startChat: (state, { payload }) => {
      state.isChatting = true;
      state.currentChat = payload;
    },
  },
});

export const { startChat } = chatSlice.actions;
