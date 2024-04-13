import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface homeState {
  contactModal: boolean;
}

const initialState: homeState = {
  contactModal: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleContactModal(state) {
      state.contactModal = !state.contactModal;
    },
  },
});

export default globalSlice.reducer;
