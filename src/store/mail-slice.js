import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMailOpen: false,
  },

  reducers: {
    openSendMail(state) {
      state.sendMailOpen = true;
    },
    closeSendMail(state) {
      state.sendMailOpen = false;
    },
  },
});

export const { openSendMail, closeSendMail } = mailSlice.actions;

export default mailSlice;
