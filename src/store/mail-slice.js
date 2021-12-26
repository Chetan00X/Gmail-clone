import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMailOpen: false,
    correspondingMail: null,
  },

  reducers: {
    openSendMail(state) {
      state.sendMailOpen = true;
    },
    closeSendMail(state) {
      state.sendMailOpen = false;
    },
    showMail(state, action) {
      state.correspondingMail = action.payload;
    },
    removeShowMail(state) {
      state.correspondingMail = null;
    },
  },
});

export const { openSendMail, closeSendMail, showMail, removeShowMail } =
  mailSlice.actions;

export default mailSlice;
