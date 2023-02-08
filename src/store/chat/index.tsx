import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "chatSlice",
  initialState: {
    isChatting: false,
  },
  reducers: {
    startChat: (state) => {
      state.isChatting = true;
    },
  },
});

export const { startChat } = chatSlice.actions;
